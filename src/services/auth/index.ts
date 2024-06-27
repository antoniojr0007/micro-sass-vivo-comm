import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'
import { prisma } from '../database'

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/app',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Google,
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
})
