// Since Auth.js doesnt manage user creation through credential, this route handler is created to allow user creation through credentials

import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    const {email, password, name} = await req.json()

    // check if user already exit in the database
    const existingUser = await prisma.user.findUnique({
        where: {email: email}
    })

    if(existingUser) {
        return Response.json({error: 'User already exists'}, {status: 400})
    }

    // if no existing user
    // hash password using either bcrypt or argon
    await prisma.user.create({
        data: {
            email,
            name,
            // password
        }
    })

    return Response.json({
        success: 'User Successfuly Created'
    })
}