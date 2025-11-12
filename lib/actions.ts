'use server'

import { signIn, signOut } from "./auth"


export async function SignInWithGithub() {
    await signIn('github', {
        redirectTo: '/profile'
    })
}

export async function HandleSignOut() {
    await signOut({
        redirectTo: '/'
    })
}


export async function handlePostJob(prevState, formData) {
    console.log(formData)
}