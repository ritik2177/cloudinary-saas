import { SignIn, SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>

      <SignUp afterSignInUrl="/home"/>
    </div>
  )
}