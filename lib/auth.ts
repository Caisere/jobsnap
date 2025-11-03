import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import prisma from './prisma';

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
    })],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.id = user.id
                token.name = user.id
            }

            return token
        },

        async session({session, token}) {
            if(session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
            }

            return session
        }
    }
})