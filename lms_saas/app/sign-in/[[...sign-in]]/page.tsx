import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <main className='felx items-center justify-center '>
      {/* SignIn component from Clerk */}
      <SignIn />
      </main>
  ) 
}