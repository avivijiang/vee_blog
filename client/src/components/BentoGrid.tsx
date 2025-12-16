import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin, Briefcase } from "lucide-react";
import { Link } from "wouter";
import avatarImage from "@assets/generated_images/professional_minimalist_avatar.png";
import travelImage from "@assets/generated_images/scenic_mountain_landscape_for_travel_blog.png";
import aiImage from "@assets/generated_images/abstract_digital_art_for_ai_blog_section.png";
import resumeImage from "@assets/generated_images/minimalist_workspace_photography_for_resume_card.png";

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
            className="w-16 h-16 rounded-full border-2 border-white/10 mb-4 shadow-md"
          />
          <h1 className="text-3xl font-display font-bold mb-2 tracking-tight">
            Hi, I'm Alex.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm a Design Engineer exploring the intersection of AI, design, and
            storytelling. Currently building digital gardens and breaking things.
          </p>
        </div>
        <div className="flex gap-4 mt-6 z-10">
          <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
      </motion.div>

      {/* Let's Talk - Position 2 (Top Right) - 2x1 */}
      <motion.div
        variants={item}
        className="col-span-1 md:col-span-2 bg-[#2a2a2a] text-white rounded-3xl p-6 flex flex-row justify-between items-center group cursor-pointer min-h-[160px]"
      >
          <div className="space-y-2">
            <h3 className="font-display font-bold text-3xl">Let's Talk</h3>
            <p className="text-xs text-white/60">
              Open for collaborations
            </p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
            <ArrowUpRight size={24} />
          </div>
      </motion.div>

      {/* Resume Card - Position 3 (Middle Right) - 2x1 */}
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
                <h3 className="font-display font-bold text-2xl text-black mb-1">Resume & Experience</h3>
                <p className="text-sm text-black/70 font-medium">
                  Senior Product Designer @ TechFlow AI
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Blog/AI Card - Position 4 (Bottom Left) - 2x1 */}
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
                    Thinking in AI
                  </h3>
                  <p className="text-white/70 text-xs">
                    Generative UI & LLMs
                  </p>
                </div>
                <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Travel Card - Position 5 (Bottom Right) - 2x1 */}
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
                  Journal
                </span>
                <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">
                  Wanderlust
                </h3>
                <p className="text-white/80 text-xs">
                  Reflections from the road less traveled.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
