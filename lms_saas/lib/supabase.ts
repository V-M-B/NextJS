import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{
        async accessToken() {
        // This function is called to get the access token  
        // You can implement your own logic to retrieve the token
        // For example, you might fetch it from a cookie or local storage
        return ((await (await auth()).getToken()));
        }
    }
  )
}