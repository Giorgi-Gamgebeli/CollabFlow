import { Server, Socket } from "socket.io";
import { db } from "@repo/db";
import {
  ClientToServerEvents,
  DirectMessage,
  ServerToClientEvents,
  UserStatus,
} from "@repo/types";

export class SocketManager {
  private users = new Map<number, string>();
  private io: Server<ClientToServerEvents, ServerToClientEvents>;

  constructor(io: Server) {
    this.io = io;
  }

  init() {
    console.log("Socket Manager initialized");
    this.io.on("connection", (socket) => {
      console.log("New client connected");
      this.handleConnection(socket);
    });
  }

  private handleConnection(socket: Socket) {
    socket.on("user:connect", (userId: number) => {
      console.log("User connected:", userId);
      this.handleUserConnect(socket, userId);
    });

    socket.on(
      "message:send",
      (data: { receiverId: number; content: string }) => {
        this.handleMessage(socket, data);
      }
    );

    socket.on("typing:start", (receiverId: number) =>
      this.handleTyping(socket, receiverId, true)
    );

    socket.on("typing:stop", (receiverId: number) =>
      this.handleTyping(socket, receiverId, false)
    );

    socket.on("disconnect", () => {
      console.log("Client disconnected");
      this.handleDisconnect(socket);
    });
  }

  private async handleUserConnect(socket: Socket, userId: number) {
    this.users.set(userId, socket.id);

    await db.user.update({
      where: { id: userId },
      data: { status: "ONLINE" },
    });

    this.notifyFriends(userId, "ONLINE");
  }

  private async handleMessage(
    socket: Socket,
    { receiverId, content }: { receiverId: number; content: string }
  ) {
    try {
      const senderId = this.getUserId(socket);
      if (!senderId) return;

      const message = (await db.directMessage.create({
        data: { content, senderId, receiverId },
        include: {
          sender: {
            select: { userName: true, avatar: true },
          },
        },
      })) as DirectMessage;

      const receiverSocketId = this.users.get(receiverId) as string;
      if (receiverId) {
        this.io.to(receiverSocketId).emit("message:receive", message);
      }
    } catch (error) {
      console.error("Message handling error:", error);
    }
  }

  private handleTyping(socket: Socket, receiverId: number, isTyping: boolean) {
    const senderId = this.getUserId(socket);
    if (!senderId) return;

    const receiverSocketId = this.users.get(receiverId);
    if (receiverSocketId) {
      this.io
        .to(receiverSocketId)
        .emit(isTyping ? "typing:start" : "typing:stop", senderId);
    }
  }

  private async handleDisconnect(socket: Socket) {
    const userId = this.getUserId(socket);
    if (!userId) return;

    this.users.delete(userId);

    await db.user.update({
      where: { id: userId },
      data: {
        status: "OFFLINE",
        lastSeen: new Date(),
      },
    });

    this.notifyFriends(userId, "OFFLINE");
  }

  private getUserId(socket: Socket): number | null {
    for (const [userId, socketId] of this.users.entries()) {
      if (socketId === socket.id) return userId;
    }
    return null;
  }

  private async notifyFriends(userId: number, status: UserStatus) {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { friends: true },
    });

    user?.friends.forEach((friend) => {
      const friendSocketId = this.users.get(friend.id);
      if (friendSocketId) {
        this.io.to(friendSocketId).emit("friend:status", { userId, status });
      }
    });
  }
}
