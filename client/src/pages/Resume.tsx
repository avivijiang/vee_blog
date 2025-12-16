import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    role: "Senior Product Designer",
    company: "TechFlow AI",
    period: "2023 - Present",
    description: "Leading the design system team and crafting generative UI experiences.",
    tags: ["Figma", "React", "AI Strategy"]
  },
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    period: "2021 - 2023",
    description: "Built award-winning marketing sites and interactive webGL experiences.",
    tags: ["Next.js", "Three.js", "WebGL"]
  },
  {
    role: "UX Researcher",
    company: "Innovate Lab",
    period: "2019 - 2021",
    description: "Conducted user research and usability testing for enterprise software.",
    tags: ["User Research", "Prototyping"]
  }
];

export default function Resume() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      <LanguageSwitcher />
      <main className="container mx-auto px-4 pt-32 pb-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-display font-bold mb-2">{t("resume.title")}</h1>
          <p className="text-muted-foreground mb-12">{t("resume.subtitle")}</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-black dark:bg-white rounded-full border-4 border-background" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold font-display">{exp.role}</h3>
                <span className="text-sm text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">{exp.period}</span>
              </div>
              <p className="text-lg font-medium text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-6 bg-secondary/50 rounded-2xl"
        >
          <h3 className="font-display font-bold text-xl mb-4">{t("resume.skills")}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
             <div>
               <h4 className="font-bold mb-2 opacity-70">{t("resume.design")}</h4>
               <ul className="space-y-1 text-muted-foreground">
                 <li>UI/UX Design</li>
                 <li>Design Systems</li>
                 <li>Prototyping</li>
                 <li>Motion Design</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-2 opacity-70">{t("resume.development")}</h4>
               <ul className="space-y-1 text-muted-foreground">
                 <li>React / Next.js</li>
                 <li>TypeScript</li>
                 <li>Tailwind CSS</li>
                 <li>Node.js</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-2 opacity-70">{t("resume.tools")}</h4>
               <ul className="space-y-1 text-muted-foreground">
                 <li>Figma</li>
                 <li>VS Code</li>
                 <li>Linear</li>
                 <li>Notion</li>
               </ul>
             </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
