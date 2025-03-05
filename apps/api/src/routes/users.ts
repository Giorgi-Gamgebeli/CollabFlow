import { Router } from "express";
import { db } from "@repo/db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await db.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
