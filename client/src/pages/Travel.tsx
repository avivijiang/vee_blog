import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Map } from "lucide-react";
import { Link } from "wouter";
import parisImage from "@assets/travel_paris_rotated.jpg";
import switzerlandImage from "@assets/travel_switzerland_rotated.jpg";
import kashgarImage from "@assets/travel_kashgar_fixed.jpg";

interface TravelPost {
  id: number;
  title: string;
  titleEn: string;
  location: string;
  locationEn: string;
  imageUrl: string;
  description: string;
  descriptionEn: string;
  externalUrl: string;
}

const travelPosts: TravelPost[] = [
  {
    id: 1,
    title: "喀什之旅",
    titleEn: "Kashgar Journey",
    location: "新疆·喀什",
    locationEn: "Kashgar, Xinjiang",
    imageUrl: kashgarImage,
    description: "探索丝绸之路上的古老城市，感受浓郁的民族风情",
    descriptionEn: "Exploring the ancient city on the Silk Road",
    externalUrl: "https://mp.weixin.qq.com/s/WLHF7rMvrP0v8gZD8B5CNQ"
  },
  {
    id: 2,
    title: "瑞士之旅",
    titleEn: "Switzerland Journey",
    location: "瑞士",
    locationEn: "Switzerland",
    imageUrl: switzerlandImage,
    description: "阿尔卑斯山脚下的童话世界",
    descriptionEn: "A fairytale world at the foot of the Alps",
    externalUrl: "https://mp.weixin.qq.com/s/rE2Qn9iRNFC3Z0bSYZvuRQ"
  },
  {
    id: 3,
    title: "巴黎之旅",
    titleEn: "Paris Journey",
    location: "法国·巴黎",
    locationEn: "Paris, France",
    imageUrl: parisImage,
    description: "浪漫之都的艺术与时尚",
    descriptionEn: "Art and fashion in the city of romance",
    externalUrl: "https://mp.weixin.qq.com/s/VppVEkaoPeC9764V85g2BA"
  }
];

export default function Travel() {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === "zh";

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
             className="text-muted-foreground text-lg mb-6"
           >
             {t("travel.subtitle")}
           </motion.p>
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
           >
             <Link href="/travel/map" className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors font-medium text-sm">
                 <Map size={16} />
                 {isZh ? "查看旅行足迹" : "View Travel Map"}
             </Link>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group cursor-pointer block"
              data-testid={`travel-post-${post.id}`}
            >
              <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/5] shadow-lg">
                <img 
                  src={post.imageUrl} 
                  alt={isZh ? post.title : post.titleEn} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <ExternalLink size={16} className="text-black" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">
                    {isZh ? post.location : post.locationEn}
                  </p>
                  <h3 className="text-xl font-display font-bold">
                    {isZh ? post.title : post.titleEn}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {isZh ? post.description : post.descriptionEn}
              </p>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}
