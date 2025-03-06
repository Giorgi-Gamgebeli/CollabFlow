import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  image: string;
  userName: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
