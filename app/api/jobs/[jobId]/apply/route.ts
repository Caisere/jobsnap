import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request, {params}:{params: Promise<{jobId: string}>}) {
    //get currentUser session
    const session = await auth()

    // if no session, redirect user to signin page
    if(!session?.user || !session.user.id) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    //perform this action after session confirmed
    try {
        // get the job id from the job page
        const jobId = (await params).jobId

        // check if job exist in db
        const job = await prisma.job.findUnique({
            where: {
                id: jobId
            }
        })

        // if no job in db return error
        if(!job) {
            return NextResponse.json(
                {message: "The job you're applying to is not found. Might have been removed or deleted by the author. Try applying to another job!",},
                {status: 400}
            )
        }

        // check if current user already applied to the same job 
        const existingApplication = await prisma.application.findFirst({
            where: {
                userId: session?.user?.id,
                jobId: jobId 
            }
        })

        // if application already exist, return error
        if(existingApplication) {
            return NextResponse.json(
                {message: "You have already apply for this job"},
                {status: 400})
        }

        // if no application, apply to job 
        await prisma.application.create({
            data: {
                userId: session.user.id,
                jobId: jobId
            }
        })

        // return application
        return NextResponse.json(
            {message: 'Job Application Successful'},
            {status: 201}
        )
    } catch {
        return new NextResponse('Internal server error', {status: 500})
    }
}