'use client'

import { SignInWithGithub } from "@/lib/actions"

export function SignIn({ provider }: { provider: string }) {

    return (
        <form action={SignInWithGithub}>
            <button className="bg-neutral-700 text-white p-2 rounded-md">
                Sign In with {provider}
            </button>
        </form>
    )
}