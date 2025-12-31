import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

interface TravelPost {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  externalUrl?: string;
}

export default function Travel() {
  const { t } = useTranslation();
  const { data: posts = [], isLoading } = useQuery<TravelPost[]>({
    queryKey: ["/api/travel"],
    queryFn: async () => {
      const response = await fetch("/api/travel");
      if (!response.ok) throw new Error("Failed to fetch travel posts");
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-gradient-animated bg-blobs bg-grain">
      <Navigation />
      <LanguageSwitcher />
      <main className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-2xl mx-auto mb-16 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-display font-bold mb-4"
           >
             {t("travel.title")}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground text-lg"
           >
             {t("travel.subtitle")}
           </motion.p>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">{t("travel.loading")}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group cursor-pointer"
                data-testid={`travel-post-${post.id}`}
              >
                {post.externalUrl ? (
                  <Link href={`/travel/detail?url=${encodeURIComponent(post.externalUrl)}&title=${encodeURIComponent(post.title)}`}>
                    <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/5] shadow-lg">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">{post.location}</p>
                        <h3 className="text-xl font-display font-bold">{post.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{post.description}</p>
                  </Link>
                ) : (
                  <>
                    <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/5] shadow-lg">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">{post.location}</p>
                        <h3 className="text-xl font-display font-bold">{post.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{post.description}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
