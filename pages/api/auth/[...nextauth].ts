import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/app/libs/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      //clientId: "a69bf7dd39332457a891",
      clientSecret: process.env.GITHUB_SECRET as string
      //clientSecret: "8109f764a7e9b477229338cd3f565fb02b076484"
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      //clientId: "989326851248-t31enikpnh6c856t5bcu5jin9tm2h0l8.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      //clientSecret: "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"
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  //secret: "NEXTAUTH_SECRET",
}

export default NextAuth(authOptions);