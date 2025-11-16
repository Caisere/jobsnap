import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST (req:Request) {

    const session = await auth()

    if (!session) {
        return NextResponse.redirect(new URL('/signin', req.url))
    }

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