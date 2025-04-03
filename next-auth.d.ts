import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  image: string;
  userName: string;
};

declare module "next-auth" {
  interface User {
    avatar?: string;
    userName: string;
    numID: number;
  }

  interface Session {
    user: ExtendedUser;
  }
}
