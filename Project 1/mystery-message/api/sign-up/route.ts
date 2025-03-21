import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";
import { log } from "console";
import { request } from "http";


export async function POST(req: Request) {
    await dbConnect();

    try {
       const { username, email, password } = await req.json()
       const existingUserVerifiedByUsername = await UserModel.findOne({ 
        username,
        isVerified: true

        })

        if(existingUserVerifiedByUsername){
            return Response.json({
                success: false,
                message: "User already exists",
            },{
                status: 400
            })
        }

      const existingUserByEmail =  await UserModel.findOne({email}) as UserModel | null;
        const verifyCode = (Math.floor(Math.random() * 900000) + 100000).toString()
      if(existingUserByEmail){
        return Response.json({
            success: false,
            message: "User already exists",
        },{
            status: 400
        })      
    } else {
        const hashedPassword = await bcrypt.hash(password, 10)
        if (existingUserByEmail) {
            existingUserByEmail.password = hashedPassword;
            existingUserByEmail.verifyCode = verifyCode;
            existingUserByEmail.verifyCodeExpire = new Date(Date.now()+360000);
            await existingUserByEmail.save()
        }
    }
    
    
}else{
        const hashedPassword = await bcrypt.hash(password, 10)
        const expiryDate = new Date()
        expiryDate.setDate(expiryDate.getHours() + 1)

      const   newUser=new UserModel({
            username,
            email,
            password: hashedPassword,
            verifyCode,
            verifyCodeExpire: verifyCode,
            isVerified: false,
            isAcceptingMessage: false,
            messages:[]
        })
        await newUser.save()
    }

    // send verification email
    const emailResponse = await sendVerificationEmail(
        email, 
        username,
         verifyCode)

    if(!emailResponse.success){
        return Response.json({
            success: false,
            message: emailResponse.message,
        },{
            status: 500
        })
    }
        return Response.json({
            success: true,
            message: "User created successfully",
        })


    } catch (error) {
        console.log("Error is : ",error);
        return Response.json({
            success: false,
            message: "Something went wrong",
        },{
            status: 500
        })
    }
}