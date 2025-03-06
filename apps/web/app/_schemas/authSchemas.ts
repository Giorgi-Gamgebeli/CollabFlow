import z from "zod";
import { UserSchemaDatabase } from "./databaseSchemas";

export const LoginSchema = z.object({
  email: UserSchemaDatabase.shape.email,

  password: z
    .string({
      message: "Only text is allowed",
    })
    .min(1, {
      message: "Password is required",
    }),
});
