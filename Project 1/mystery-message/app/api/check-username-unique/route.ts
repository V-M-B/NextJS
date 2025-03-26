import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {z} from "zod";
import {usernameValidation} from "@/schemas/signUpSchema";

const UsernameSchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request) {
    await dbConnect();


    try {
        const {searchParams} = new URL(request.url);
        const username = searchParams.get('username');
        const queryParams={
            username:searchParams.get('username')
        }
        // validation with zod
        const result =UsernameQuerySchema.safeParse(queryParams);
        console.log(result);
        if (!result.success) {
            const usernameError = result.error.format()._errors[0];
            
        }
        
    }
    catch (err: any) {
        console.log(err);
        return Response.json({success: false, message: err},
            {status: 500}
        )
    }
})