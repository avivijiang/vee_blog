import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import aiImage from "@assets/generated_images/abstract_digital_art_for_ai_blog_section.png";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export default function Blog() {
  const { t } = useTranslation();
  const { data: articles = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
    queryFn: async () => {
      const response = await fetch("/api/blog");
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      <LanguageSwitcher />
      
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
               {t("blog.title")}
             </motion.h1>
             <p className="text-white/80 text-lg">{t("blog.subtitle")}</p>
           </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {isLoading ? (
          <div className="text-center text-muted-foreground">{t("blog.loading")}</div>
        ) : (
          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer border-b border-border pb-8 last:border-0"
                data-testid={`article-${article.slug}`}
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
                  {t("blog.readArticle")} <ArrowRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
