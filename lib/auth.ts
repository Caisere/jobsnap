import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
// import { verifyPassword } from "./helper";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    // providers
    providers: [
        // GitHub provider
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        // Credentials provider for email and password
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email} = credentials as { email: string};

                const user = await prisma.user.findUnique({
                    where: { email: email },
                });

                return user;
            },
        }),
    ],
    // session
    session: {
        strategy: "jwt",
    },
    // callbacks
    callbacks: {
        // jwt callback
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.id;
            }

            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
            }

            return session;
        },
    },
});
