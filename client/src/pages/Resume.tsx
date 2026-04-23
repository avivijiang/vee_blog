import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === "zh";
  const splitProjectDetails = (description: string) =>
    description
      .split(/[；;]/)
      .map((item) => item.trim())
      .filter(Boolean);

  const experiences = isZh ? [
    {
      role: "资深前端开发工程师",
      company: "杭州滴滴",
      period: "2019.12 - 2025.10",
      description: "担任智能数据策略平台、政府监管、安全智控、营销等多个业务方向的前端负责人，负责需求对接、任务分配及全流程交付风险管控；规划并高质量交付微前端架构升级、多平台融合等技术项目；主导 AI 辅助研发标准流程制定与落地，提升业务需求交付效率。",
      tags: ["React", "TypeScript", "微前端", "性能优化", "AI辅助研发"]
    },
    {
      role: "前端开发工程师",
      company: "北京字节跳动",
      period: "2018.9 - 2019.12",
      description: "参与直播、视频版权中台、客户端研发中台业务的前端开发；参与西瓜 Play 直播打榜 H5 大型运营活动；独立负责创作者运营数据工具的移动端项目；参与自动化测试技术项目。",
      tags: ["React", "Svelte", "H5", "自动化测试"]
    },
    {
      role: "前端开发工程师",
      company: "北京摩拜单车",
      period: "2017.8 - 2018.8",
      description: "参与摩拜单车端内 H5 开发及运营活动开发；参与组件库开发及国际化开发。",
      tags: ["Vue", "H5", "组件库", "国际化"]
    }
  ] : [
    {
      role: "Senior Frontend Developer",
      company: "Didi Chuxing, Hangzhou",
      period: "2019.12 - 2025.10",
      description: "Led frontend for data strategy, government regulation, safety control, and marketing platforms; Managed requirements, task allocation, and end-to-end delivery; Architected micro-frontend solutions and multi-platform integration; Established AI-assisted development standards to boost delivery efficiency.",
      tags: ["React", "TypeScript", "Micro-frontend", "Performance", "AI Dev"]
    },
    {
      role: "Frontend Developer",
      company: "ByteDance, Beijing",
      period: "2018.9 - 2019.12",
      description: "Developed frontend for live streaming, video copyright, and client R&D platforms; Participated in Xigua Play live-stream ranking H5 campaigns; Led mobile project for creator operations data tools; Contributed to automation testing infrastructure.",
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
      name: "安全工作台",
      description: "整合安行、隐患、智控、四海四个独立平台，主导架构设计与主站搭建；自研动态配置平台，支持菜单、权限、消息通知灵活配置；推动四系统自动化上线，上线规范化后零事故。"
    },
    {
      name: "滴滴智能策略平台",
      description: "两轮车、货运、代驾数据策略平台，主导 single-spa 微前端改造，需求上线从 7-20 分缩短至 30 秒；电子围栏配置化重构，新增围栏从 3-4 天缩短至 1 小时；完善 Node 端日志与监控看板。"
    },
    {
      name: "AI 辅助研发流程",
      description: "制定 AI 研发标准流程，统一需求文档、接口文档与模板代码规范；基于参考文件由 AI 快速生成页面框架；通用样式类新需求 100% 采用 AI 研发流程，沉淀 10+ 通用组件。"
    },
    {
      name: "中后台监控平台",
      description: "将 JS 错误与业务模块精准关联，独立完成产品设计与接口文档；接入公司埋点 SDK 写入 ES，采集模块标识存入 MongoDB；Node.js 定时告警，缩短问题响应时间。"
    },
    {
      name: "西瓜视频直播运营平台",
      description: "直播后台支撑平台，使用 React + TypeScript 开发公会管理、薪资线上自动结算等功能；独立开发创作者运营数据 H5（Svelte）；使用 Babel + Puppeteer 构建自动化测试。"
    },
    {
      name: "摩拜单车端内 H5",
      description: "使用 Vue 全家桶开发 App 内嵌 H5，负责月卡、退押金、禁停罚款、信用分、卡券等核心业务；封装常用组件 5+；独立负责 Banner 和金刚位运营活动上线。"
    }
  ] : [
    {
      name: "Safety Workbench",
      description: "Unified 4 independent platforms (incident, hazard, inspection, user-report); led architecture design and main shell; built dynamic config platform for menus/permissions; automated deployment pipeline with zero incidents post-migration."
    },
    {
      name: "Didi Intelligent Strategy Platform",
      description: "Data strategy platform for bikes, freight, and designated driving; led single-spa micro-frontend migration, cutting deploy time from 7-20 min to 30s; rebuilt geofence module from scratch, reducing new fence delivery from 3-4 days to under 1 hour."
    },
    {
      name: "AI-Assisted Dev Workflow",
      description: "Established AI-assisted development standards: unified requirement docs, API docs, and template code; AI generates page scaffolding from reference files; 100% adoption for generic UI requirements; delivered 10+ reusable components."
    },
    {
      name: "Backend Monitoring Platform",
      description: "Linked JS errors to business modules precisely; full-stack delivery (frontend + Node.js); dual data sources via company SDK (ES) and click tracking (MongoDB); scheduled alerts to shorten incident response time."
    },
    {
      name: "Xigua Video Live Operations",
      description: "Live-streaming backend platform; developed guild management and automated salary settlement with React + TypeScript; independently built creator analytics H5 in Svelte; set up automation testing with Babel + Puppeteer."
    },
    {
      name: "Mobike In-App H5",
      description: "Built Vue-based in-app H5 covering membership cards, deposit refunds, parking fines, credit score, and coupons; encapsulated 5+ reusable components; independently owned and shipped Banner and shortcut marketing campaigns."
    }
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Golang", "Node.js"],
    frameworks: ["React", "Vue", "Svelte", "React Native"],
    tools: ["Webpack", "Vite", "Rollup", "Puppeteer"],
    visualization: ["Echarts", "AMap", "Tencent Maps"],
    ai: ["Claude Code", "Cursor", "OpenClaw"]
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
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm"
              >
                <h3 className="font-bold font-display mb-2">{project.name}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                  {splitProjectDetails(project.description).map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
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
             <div>
               <h4 className="font-bold mb-3 text-muted-foreground">{isZh ? "AI 工具" : "AI Tools"}</h4>
               <ul className="space-y-1.5">
                 {skills.ai.map(skill => (
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
