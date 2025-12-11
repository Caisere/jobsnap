import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/lib/helper";
import { signIn } from "@/lib/auth";

export async function POST(request: NextRequest) {
    const {email, password} = await request.json();

    // check if user exists
    const user = await prisma.user.findUnique({
        where: {email: email}
    })

    // if user does not exist, return error
    if (!user) {
        return NextResponse.json({error: 'Invalid Email or Password'}, {status: 401})
    }

    // check if password is correct
    const isPasswordCorrect = await verifyPassword(password, user.password as string);

    // if password is incorrect, return error
    if (!isPasswordCorrect) {
        return NextResponse.json({error: 'Invalid Email or Password'}, {status: 401})
    }
    
    // sign in with credentials
    await signIn('credentials', {
        email: email,
        password: password,
        redirect: false,
    }, {
        request: request.url
    });

    // return success response
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
}