// This file contains the logic for creating a companion in the databas
// It uses the Supabase client to interact with the database
// // It also uses Clerk for authentication to get the user ID of the author



'use server';
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

// application logic
export const createCompanion =async (formData:CreateCompanion)=>{
    // Get the user ID from Clerk authentication
    // This will give you the user ID of the authenticated user
    const {userId:author}=await auth();
    // access to the supabase client
    // You can use the createSupabaseClient function to create a Supabase client
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from("companions")
        .insert({
            ...formData,
            author
        })
        .select("*");

        if (error || !data) {
            throw new Error(error?.message || "Failed to create companion");
        }
    return data[0];
}