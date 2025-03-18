import mongoose , { Schema , Document} from "mongoose";

export interface Message extends Document {
    content: string,
    createdAt: Date
    }

const MessageSchema:Schema<Message> = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})    


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpire: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages:Message[]
    }


    const UserSchema:Schema<User> = new Schema({
        username: {
            type: String,
            required: [true, "Username is Required"],
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required:  [true, "email is Required"],
            unique: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please use valid email address"],
            
        },
        password: {
            type: String,
            required:  [true, "Password is Required"],
        },
        verifyCode: {
            type: String,
            required: [true, "Verify Code is Required"],
        },
        verifyCodeExpire: {
            type: Date,
            required:  [true, "Verify Code expire is Required"],
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        isAcceptingMessage: {
            type: Boolean,
            default: true
        },
        messages:[MessageSchema]
    })    
    
    const UserModel = (mongoose.models.user as mongoose.Model<User>) || mongoose.model<User>("user", UserSchema);
    const MessageModel = (mongoose.models.message as mongoose.Model<Message>) || mongoose.model<Message>("message", MessageSchema);
    export {MessageModel}
    export default UserModel