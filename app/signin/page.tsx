import { SignIn } from "@/components/sign-in"
import SignInForm from "@/components/signin-form"
import Link from "next/link"

function SignInPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-3xl w-full flex flex-col justify-center items-center gap-4">
                <SignInForm />
                <SignIn provider="github" />
                <div className="flex gap-1 items-center text-sm text-stone-400">
                    <p>Don&apos;t have an account yet?</p>
                    <Link className="hover:underline font-semibold" href='/signup'>Create an Account</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInPage