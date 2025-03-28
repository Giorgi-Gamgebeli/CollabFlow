import type { NextAuthConfig } from "next-auth";
import { compare, hash } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./apps/web/app/_schemas/authSchemas";
import { db } from "@repo/db";

export default {
  session: {
    maxAge: 2 * 24 * 60 * 60, // inactive for 2 days = logout
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const result = LoginSchema.safeParse(credentials);

        if (!result.success) return null;

        const { email, password } = result.data;

        const user = await db.user.findUnique({
          where: {
            email,
          },
          select: {
            password: true,
            email: true,
            id: true,
            userName: true,
          },
        });

        if (!user || !user.password) return null;

        const isPasswordValid = await compare(
          password as string,
          user.password as string
        );

        if (!isPasswordValid) return null;

        return {
          id: user.id.toString(),
          email: user.email,
          userName: user.userName,
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
} satisfies NextAuthConfig;
