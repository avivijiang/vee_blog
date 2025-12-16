import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertTravelPostSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Blog routes
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating blog post:", error);
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  // Travel routes
  app.get("/api/travel", async (req, res) => {
    try {
      const posts = await storage.getTravelPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching travel posts:", error);
      res.status(500).json({ error: "Failed to fetch travel posts" });
    }
  });

  app.post("/api/travel", async (req, res) => {
    try {
      const validatedData = insertTravelPostSchema.parse(req.body);
      const post = await storage.createTravelPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating travel post:", error);
      res.status(400).json({ error: "Invalid travel post data" });
    }
  });

  return httpServer;
}
