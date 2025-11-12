// proxy.ts
import { auth } from "@/lib/auth"
import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = [
    '/dashboard',
    '/profile',
    '/browsejobs',
    '/postjob',
]

export async function proxy(request: NextRequest) {
    const session = await auth()
    const { pathname } = request.nextUrl
    
    // Check if current path matches any protected route
    const isProtectedRoute = protectedRoutes.some(route => 
        pathname.startsWith(route)
    )
    
    if (!session?.user && isProtectedRoute) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/browsejobs/:path*',
        '/postjob/:path*',
    ]
}