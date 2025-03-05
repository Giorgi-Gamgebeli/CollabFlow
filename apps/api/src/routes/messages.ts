import { Router } from "express";
import { db } from "@repo/db";

const router = Router();

router.get("/conversations/:userId", async (req, res) => {
  const { userId } = req.params;
  const messages = await db.directMessage.findMany({
    where: {
      OR: [{ senderId: Number(userId) }, { receiverId: Number(userId) }],
    },
    include: {
      sender: {
        select: {
          userName: true,
          avatar: true,
        },
      },
    },
  });

  res.json(messages);
});

export default router;
