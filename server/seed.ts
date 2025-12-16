import { storage } from "./storage";

async function seed() {
  console.log("Seeding database...");

  // Seed blog posts
  const blogPosts = [
    {
      title: "The Future of Generative UI",
      slug: "generative-ui",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      excerpt: "How AI is shifting interfaces from static to dynamic, and what it means for designers.",
      content: "Full article content here..."
    },
    {
      title: "Understanding LLM Context Windows",
      slug: "llm-context",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      excerpt: "A deep dive into how large language models process and retain information.",
      content: "Full article content here..."
    },
    {
      title: "Designing for Agents",
      slug: "designing-agents",
      date: "Oct 15, 2024",
      readTime: "6 min read",
      excerpt: "UX patterns for autonomous agents and human-in-the-loop interactions.",
      content: "Full article content here..."
    },
    {
      title: "Prompt Engineering as a Design Skill",
      slug: "prompt-engineering",
      date: "Sep 02, 2024",
      readTime: "4 min read",
      excerpt: "Why every designer needs to understand the fundamentals of prompting.",
      content: "Full article content here..."
    }
  ];

  for (const post of blogPosts) {
    await storage.createBlogPost(post);
  }

  // Seed travel posts
  const travelPosts = [
    {
      title: "Swiss Alps",
      location: "Switzerland",
      imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800",
      description: "Finding peace in the silence of the mountains."
    },
    {
      title: "Kyoto Streets",
      location: "Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
      description: "Early mornings in Gion."
    },
    {
      title: "Icelandic Roads",
      location: "Iceland",
      imageUrl: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
      description: "Chasing waterfalls and northern lights."
    }
  ];

  for (const post of travelPosts) {
    await storage.createTravelPost(post);
  }

  console.log("Database seeded successfully!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
