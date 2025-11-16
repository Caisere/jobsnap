'use server'

import { PostJobData } from "@/components/post-job-form"
import { auth, signIn, signOut } from "./auth"
import prisma from "./prisma"
import { revalidatePath, revalidateTag } from "next/cache"


export async function SignInWithGithub() {
    await signIn('github', {
        redirectTo: '/dashboard'
    })
}

export async function HandleSignOut() {
    await signOut({
        redirectTo: '/'
    })
}


export async function handlePostJob(data:PostJobData) {
    // console.log(data)
    const session = await auth()

    if (!session) return 

    try {
        await prisma.job.create({
            data: {
                ...data,
                postedById: session?.user?.id as string,
            },
        });

        revalidatePath('/dashaboard');
        revalidatePath('/');
        revalidatePath('/browsejobs');
        revalidateTag('browseJobs', 'default');
        revalidateTag('job', 'default');
    
        return {message: 'Job Successfully Posted',  status: 201 } 
    } catch {
        return {message: "Internal server error",  status: 500 };
    }
}