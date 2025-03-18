import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3,"Username must be at least 3 characters long")
    .max(20,"Username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9]+$/, "Username must only contain letters and numbers")  

export const signUpSchema = z.object({
    username: usernameValidation,               
    email:z.string().email({message:'Invalid email address'}),
    password: z.string().min(6,{message:"Password must be atleast 6 character"})
})    