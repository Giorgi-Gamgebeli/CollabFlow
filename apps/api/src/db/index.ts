import { db } from "@repo/db";

export async function getWhiteboardContent(whiteboardId: number) {
  const whiteboard = await db.whiteboard.findUnique({
    where: {
      id: whiteboardId,
    },
    include: {
      workspace: {
        include: {
          users: true,
        },
      },
    },
  });
  return whiteboard;
}
