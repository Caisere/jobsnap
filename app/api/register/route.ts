// Since Auth.js doesnt manage user creation through credential, this route handler is created to allow user creation through credentials

import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { hashPassword } from "@/lib/helper";

export async function POST(req:NextRequest) {
    const {email, password, name} = await req.json()

    // check if user already exist in the database
    const existingUser = await prisma.user.findUnique({
        where: {email: email}
    })

    // if user with the same already exist, return error message, user already exit
    if (existingUser) {
        return Response.json({error: 'User already exists'}, {status: 400})
    }

    // if no existing user
    // hash password
    const hashedPassword = await hashPassword(password)
    
    // create a new user with the provided information
    await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    })

    // return success message
    return Response.json({
        success: 'User Successfuly Created'
    })
}