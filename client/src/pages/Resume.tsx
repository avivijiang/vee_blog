import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === "zh";

  const experiences = isZh ? [
    {
      role: "资深前端开发工程师",
      company: "杭州滴滴",
      period: "2019.12 - 2025.10",
      description: "负责数据策略、安全智控、营销等多个平台的前端开发；基于single-spa微前端改造老系统架构；持续优化页面性能和稳定性建设；需求分配与技术项目规划。",
      tags: ["React", "TypeScript", "微前端", "性能优化"]
    },
    {
      role: "前端开发工程师",
      company: "北京字节跳动",
      period: "2018.9 - 2019.12",
      description: "参与直播、视频版权中台、客户端研发中台业务的前端开发；独立负责创作者运营数据工具的移动端项目。",
      tags: ["React", "Svelte", "H5", "自动化测试"]
    },
    {
      role: "前端开发工程师",
      company: "北京摩拜单车",
      period: "2017.8 - 2018.8",
      description: "参与摩拜单车端内H5开发及运营活动开发；参与组件库开发及国际化开发。",
      tags: ["Vue", "H5", "组件库", "国际化"]
    }
  ] : [
    {
      role: "Senior Frontend Developer",
      company: "Didi Chuxing, Hangzhou",
      period: "2019.12 - 2025.10",
      description: "Led frontend development for data strategy, safety control, and marketing platforms; Architected micro-frontend solutions using single-spa; Optimized performance and stability; Managed requirements and technical project planning.",
      tags: ["React", "TypeScript", "Micro-frontend", "Performance"]
    },
    {
      role: "Frontend Developer",
      company: "ByteDance, Beijing",
      period: "2018.9 - 2019.12",
      description: "Developed frontend for live streaming, video copyright, and client R&D platforms; Led mobile project for creator operations data tools.",
      tags: ["React", "Svelte", "H5", "Automation Testing"]
    },
    {
      role: "Frontend Developer",
      company: "Mobike, Beijing",
      period: "2017.8 - 2018.8",
      description: "Developed in-app H5 pages and marketing campaigns; Contributed to component library and internationalization.",
      tags: ["Vue", "H5", "Component Library", "i18n"]
    }
  ];

  const projects = isZh ? [
    {
      name: "滴滴智能策略平台",
      description: "两轮车、货运、代驾的数据策略平台，支持20+类型电子围栏配置，优化5w+围栏渲染速度从20s降至3s"
    },
    {
      name: "安全隐患智控工作台",
      description: "整合四个分散系统，统一菜单配置，重构老页面，升级Vue版本和UI组件库"
    },
    {
      name: "城市管理工具APP",
      description: "使用ReactNative开发移动办公工具，20+城市使用并获好评"
    },
    {
      name: "西瓜视频直播运营平台",
      description: "直播后台支撑平台，负责公会审核、薪资结算等功能开发"
    }
  ] : [
    {
      name: "Didi Intelligent Strategy Platform",
      description: "Data strategy platform for bikes, freight, and designated driving; 20+ geofence types; Optimized 50k+ fence rendering from 20s to 3s"
    },
    {
      name: "Safety Hazard Control Workbench",
      description: "Unified 4 scattered systems, centralized menu configuration, refactored legacy pages"
    },
    {
      name: "City Management Tool APP",
      description: "React Native mobile office tool, used by 20+ cities with positive feedback"
    },
    {
      name: "Xigua Video Live Operations Platform",
      description: "Backend platform for live streaming, developed guild management and salary settlement features"
    }
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Golang", "Node.js"],
    frameworks: ["React", "Vue", "Svelte", "React Native"],
    tools: ["Webpack", "Vite", "Rollup", "Puppeteer"],
    visualization: ["Echarts", "AMap", "Tencent Maps"]
  };

  return (
    <div className="min-h-screen bg-gradient-animated bg-blobs bg-grain">
      <Navigation />
      <LanguageSwitcher />
      <main className="container mx-auto px-4 pt-32 pb-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-display font-bold mb-2">{isZh ? "胡玮" : "Vee Hu"}</h1>
          <p className="text-xl text-muted-foreground mb-4">{isZh ? "资深前端开发工程师" : "Senior Frontend Developer"}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{isZh ? "杭州" : "Hangzhou, China"}</span>
            <span>•</span>
            <span>{isZh ? "软件工程 | 江西师范大学" : "Software Engineering | Jiangxi Normal University"}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold mb-6">{isZh ? "工作经历" : "Experience"}</h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="relative pl-8 border-l-2 border-border"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold mb-6">{isZh ? "项目经验" : "Projects"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm"
              >
                <h3 className="font-bold font-display mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50"
        >
          <h2 className="font-display font-bold text-2xl mb-6">{isZh ? "技术栈" : "Tech Stack"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
             <div>
               <h4 className="font-bold mb-3 text-muted-foreground">{isZh ? "语言" : "Languages"}</h4>
               <ul className="space-y-1.5">
                 {skills.languages.map(skill => (
                   <li key={skill} className="text-foreground">{skill}</li>
                 ))}
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-3 text-muted-foreground">{isZh ? "框架" : "Frameworks"}</h4>
               <ul className="space-y-1.5">
                 {skills.frameworks.map(skill => (
                   <li key={skill} className="text-foreground">{skill}</li>
                 ))}
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-3 text-muted-foreground">{isZh ? "工具" : "Tools"}</h4>
               <ul className="space-y-1.5">
                 {skills.tools.map(skill => (
                   <li key={skill} className="text-foreground">{skill}</li>
                 ))}
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-3 text-muted-foreground">{isZh ? "可视化" : "Visualization"}</h4>
               <ul className="space-y-1.5">
                 {skills.visualization.map(skill => (
                   <li key={skill} className="text-foreground">{skill}</li>
                 ))}
               </ul>
             </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
