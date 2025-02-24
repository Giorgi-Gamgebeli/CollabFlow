import {Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { NextAuthJWTPayload, RequestWithUser } from "./types/auth";

export const authenticate = (req: RequestWithUser<NextAuthJWTPayload>, res: Response, next: NextFunction) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(
      token, 
      process.env.NEXTAUTH_SECRET as string,
      { algorithms: ['HS256'] }
    ) as NextAuthJWTPayload;
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}