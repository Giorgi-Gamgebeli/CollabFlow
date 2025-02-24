import {Request} from "express"

export interface NextAuthJWTPayload {
  name?: string;
  email?: string;
  sub?: string;
  iat?: number;
  exp?: number;
  jti?: string;
}

export interface RequestWithUser<T = NextAuthJWTPayload> extends Request {
  user?: T;
}