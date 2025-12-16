import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;
import * as schema from "@shared/schema";
import type { 
  User, 
  InsertUser, 
  BlogPost, 
  InsertBlogPost,
  TravelPost,
  InsertTravelPost 
} from "@shared/schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle({ client: pool, schema, casing: "snake_case" });

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Blog methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Travel methods
  getTravelPosts(): Promise<TravelPost[]>;
  createTravelPost(post: InsertTravelPost): Promise<TravelPost>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
    return result;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, username),
    });
    return result;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(schema.users).values(insertUser).returning();
    return user;
  }

  // Blog methods
  async getBlogPosts(): Promise<BlogPost[]> {
    const posts = await db.query.blogPosts.findMany({
      orderBy: (blogPosts, { desc }) => [desc(blogPosts.createdAt)],
    });
    return posts;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const post = await db.query.blogPosts.findFirst({
      where: (blogPosts, { eq }) => eq(blogPosts.slug, slug),
    });
    return post;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(schema.blogPosts).values(insertPost).returning();
    return post;
  }

  // Travel methods
  async getTravelPosts(): Promise<TravelPost[]> {
    const posts = await db.query.travelPosts.findMany({
      orderBy: (travelPosts, { desc }) => [desc(travelPosts.createdAt)],
    });
    return posts;
  }

  async createTravelPost(insertPost: InsertTravelPost): Promise<TravelPost> {
    const [post] = await db.insert(schema.travelPosts).values(insertPost).returning();
    return post;
  }
}

export const storage = new DatabaseStorage();
