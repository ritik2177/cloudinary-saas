import { SignIn } from '@clerk/nextjs'

export default function Login() {
  return(
  <div className='w-full min-h-screen flex items-center justify-center'>
   <SignIn afterSignInUrl="/home"/>
    </div>
  )
}