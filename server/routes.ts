import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static portfolio site, so we don't need any API routes

  const httpServer = createServer(app);

  return httpServer;
}
