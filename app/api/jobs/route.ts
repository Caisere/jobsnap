import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST (req:Request) {
    // get user session to confirm user is authenticated before accessing this page
    const session = await auth()

    // if no session, navigate to signin page to allow user signin again
    if (!session) {
        return NextResponse.redirect(new URL('/signin', req.url))
    }

    // create new job
    try {
        const data = await req.json();
    
        const job = await prisma.job.create({
            data: {
                ...data,
                postedById: session?.user?.id,
            },
        });
    
        return NextResponse.json(job);
    } catch {
        return new NextResponse("Internal server error", { status: 500 });
    }
}