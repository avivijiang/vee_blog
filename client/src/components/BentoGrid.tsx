import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Cat } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import avatarImage from "@assets/cat_pipi_optimized.jpg";
import travelImage from "@assets/generated_images/travel_bg.jpg";
import aiImage from "@assets/generated_images/ai_blog.jpg";
import resumeImage from "@assets/generated_images/resume_bg.jpg";
import catImage from "@assets/IMG_2364_1767170067453.JPG";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BentoGrid() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-4 pt-24"
    >
      {/* Bio / Avatar Card - 2x2 - Position 1 */}
      <motion.div
        variants={item}
        className="col-span-1 md:col-span-2 row-span-2 bg-card border rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-shadow duration-300"
      >
        <div className="z-10">
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-14 h-14 rounded-full border-2 border-white/20 mb-4 shadow-lg object-cover"
          />
          <h1 className="text-3xl font-display font-bold mb-2 tracking-tight">
            {t("home.greeting")}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("home.bio")}
          </p>
        </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
      </motion.div>

      {/* Let's Talk - Position 2 (Top Right) - 1x1 */}
      <motion.div
        variants={item}
        className="col-span-1 bg-[#2a2a2a] text-white rounded-3xl p-6 flex flex-col justify-between group cursor-pointer min-h-[160px]"
      >
          <div className="flex justify-between items-start">
             <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={16} />
             </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg leading-tight">{t("home.letsTalk")}</h3>
            <p className="text-[10px] text-white/60 mt-1">
              {t("home.collaborate")}
            </p>
          </div>
      </motion.div>

      {/* My Cat - Position 3 (Top Right) - 1x1 */}
      <motion.div
        variants={item}
        className="col-span-1 bg-neutral-100 rounded-3xl overflow-hidden relative group cursor-pointer min-h-[160px]"
      >
        <Link href="/cat">
          <div className="absolute inset-0 block">
             <img
              src={catImage}
              alt="My Cat"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4">
               <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm">
                  <Cat size={16} className="text-black" />
               </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Resume Card - Position 4 (Middle Right) - 2x1 */}
      <motion.div
        variants={item}
        className="col-span-1 md:col-span-2 bg-white border rounded-3xl overflow-hidden relative group cursor-pointer min-h-[200px]"
      >
        <Link href="/resume">
          <div className="absolute inset-0 block">
            <img 
              src={resumeImage}
              alt="Workspace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-colors backdrop-blur-[2px] group-hover:backdrop-blur-none" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-sm">
                  <Briefcase size={20} />
                </div>
                <ArrowUpRight className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-1">{t("home.resume")}</h3>
                <p className="text-sm text-black/70 font-medium">
                  {t("home.currentRole")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Blog/AI Card - Position 5 (Bottom Left) - 2x1 */}
      <motion.div
        variants={item}
        className="col-span-1 md:col-span-2 bg-secondary rounded-3xl overflow-hidden relative group cursor-pointer min-h-[200px]"
      >
        <Link href="/blog">
          <div className="absolute inset-0 block">
             <img
              src={aiImage}
              alt="AI"
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex justify-between items-end w-full">
                <div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight mb-1">
                    {t("home.thinkingAI")}
                  </h3>
                  <p className="text-white/70 text-xs">
                    {t("home.aiSubtitle")}
                  </p>
                </div>
                <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Travel Card - Position 6 (Bottom Right) - 2x1 */}
      <motion.div
        variants={item}
        className="col-span-1 md:col-span-2 bg-black text-white rounded-3xl overflow-hidden relative group cursor-pointer min-h-[200px]"
      >
        <Link href="/travel">
          <div className="absolute inset-0 block">
            <img
              src={travelImage}
              alt="Travel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider">
                  {t("home.journal")}
                </span>
                <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">
                  {t("home.wanderlust")}
                </h3>
                <p className="text-white/80 text-xs">
                  {t("home.travelSubtitle")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
