'use client'

import { SignInWithGithub } from "@/lib/actions"
import { Button } from "./ui/button"
import { Github } from "lucide-react"

export function SignIn({ provider }: { provider: string }) {

    return (
        <form action={SignInWithGithub}>
            <Button className="bg-stone-50 text-stone-700 p-2 rounded-md hover:bg-stone-700 hover:text-stone-50 transition-all duration-300 ease-linear">
                <Github className="" />
                Continue with {provider}
            </Button>
        </form>
    )
}