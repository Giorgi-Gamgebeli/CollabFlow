import express from "express";
import dotenv from "dotenv";
import { authenticate, requestLogger } from "./middleware";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import usersRouter from "./routes/users";
import messagesRouter from "./routes/messages";
import { RequestWithUser } from "./middleware/types/auth";
import { ClientToServerEvents, ServerToClientEvents } from "@repo/types";
import { SocketManager } from "./websockets/socketManager";

dotenv.config();

const app = express();
const httpServer = createServer(app);

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3005",
    credentials: true,
  })
);

app.use(express.json());
app.use(requestLogger);

app.use("/api/users", usersRouter);
app.use("/api/messages", messagesRouter);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
});

app.get("/api/protected", authenticate, (req: RequestWithUser, res) => {
  res.json({ message: "You have access to protected route", user: req.user });
});

const io = new Server<ServerToClientEvents, ClientToServerEvents>(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3005",
    credentials: true,
  },
});

const socketManager = new SocketManager(io);
socketManager.init();

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
