import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aiImage from "@assets/generated_images/abstract_digital_art_for_ai_blog_section.png";

const articles = [
  {
    title: "The Future of Generative UI",
    date: "Dec 12, 2024",
    readTime: "5 min read",
    excerpt: "How AI is shifting interfaces from static to dynamic, and what it means for designers.",
    slug: "generative-ui"
  },
  {
    title: "Understanding LLM Context Windows",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    excerpt: "A deep dive into how large language models process and retain information.",
    slug: "llm-context"
  },
  {
    title: "Designing for Agents",
    date: "Oct 15, 2024",
    readTime: "6 min read",
    excerpt: "UX patterns for autonomous agents and human-in-the-loop interactions.",
    slug: "designing-agents"
  },
  {
    title: "Prompt Engineering as a Design Skill",
    date: "Sep 02, 2024",
    readTime: "4 min read",
    excerpt: "Why every designer needs to understand the fundamentals of prompting.",
    slug: "prompt-engineering"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      
      <div className="relative h-[40vh] overflow-hidden">
        <img src={aiImage} className="absolute inset-0 w-full h-full object-cover" alt="AI Header" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute bottom-0 left-0 w-full p-8 pb-12 bg-gradient-to-t from-background to-transparent">
           <div className="container mx-auto px-4 max-w-3xl">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
             >
               Thinking in AI
             </motion.h1>
             <p className="text-white/80 text-lg">Explorations at the edge of technology.</p>
           </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer border-b border-border pb-8 last:border-0"
            >
              <div className="flex items-baseline justify-between mb-2">
                 <span className="text-sm text-muted-foreground font-mono">{article.date}</span>
                 <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold font-display group-hover:text-blue-600 transition-colors mb-3">
                {article.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors">
                Read Article <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
