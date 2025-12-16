import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.resume": "Resume",
      "nav.blog": "Blog",
      "nav.travel": "Travel",
      "nav.cat": "My Cat",

      // Home - Bio
      "home.greeting": "Hi, I'm Alex.",
      "home.bio": "I'm a Design Engineer exploring the intersection of AI, design, and storytelling. Currently building digital gardens and breaking things.",
      "home.letsTalk": "Let's Talk",
      "home.collaborate": "Collaborate",
      "home.resume": "Resume & Experience",
      "home.currentRole": "Senior Product Designer @ TechFlow AI",
      "home.thinkingAI": "Thinking in AI",
      "home.aiSubtitle": "Generative UI & LLMs",
      "home.wanderlust": "Wanderlust",
      "home.travelSubtitle": "Reflections from the road less traveled.",
      "home.journal": "Journal",

      // Resume
      "resume.title": "Resume",
      "resume.subtitle": "My professional journey and skills.",
      "resume.skills": "Skills",
      "resume.design": "Design",
      "resume.development": "Development",
      "resume.tools": "Tools",

      // Blog
      "blog.title": "Thinking in AI",
      "blog.subtitle": "Explorations at the edge of technology.",
      "blog.loading": "Loading articles...",
      "blog.readArticle": "Read Article",

      // Travel
      "travel.title": "Wanderlust",
      "travel.subtitle": "A visual journal of places that left a mark.",
      "travel.loading": "Loading travel posts...",

      // Cat
      "cat.title": "Meet Luna",
      "cat.bio": "The Chief Morale Officer. She enjoys napping on keyboards, chasing laser pointers, and judging my code reviews.",
      "cat.breed": "Breed",
      "cat.breedValue": "British Shorthair",
      "cat.age": "Age",
      "cat.ageValue": "2 Years Old",
      "cat.favToy": "Favorite Toy",
      "cat.favToyValue": "Cardboard Box",
      "cat.superpower": "Superpower",
      "cat.superpowerValue": "Purring at 50Hz",
    }
  },
  zh: {
    translation: {
      // Navigation
      "nav.home": "首页",
      "nav.resume": "简历",
      "nav.blog": "博客",
      "nav.travel": "旅行",
      "nav.cat": "我的猫",

      // Home - Bio
      "home.greeting": "你好，我是 Alex。",
      "home.bio": "我是一名设计工程师，探索 AI、设计和故事叙述的交汇点。目前正在构建数字花园，并不断突破边界。",
      "home.letsTalk": "联系我",
      "home.collaborate": "合作洽谈",
      "home.resume": "简历与经历",
      "home.currentRole": "高级产品设计师 @ TechFlow AI",
      "home.thinkingAI": "AI 思考",
      "home.aiSubtitle": "生成式 UI 与大语言模型",
      "home.wanderlust": "旅行日志",
      "home.travelSubtitle": "那些留下印记的旅途回忆。",
      "home.journal": "游记",

      // Resume
      "resume.title": "简历",
      "resume.subtitle": "我的职业发展历程与技能。",
      "resume.skills": "技能",
      "resume.design": "设计",
      "resume.development": "开发",
      "resume.tools": "工具",

      // Blog
      "blog.title": "AI 思考",
      "blog.subtitle": "探索技术的前沿。",
      "blog.loading": "正在加载文章...",
      "blog.readArticle": "阅读文章",

      // Travel
      "travel.title": "旅行日志",
      "travel.subtitle": "那些留下深刻印象的地方。",
      "travel.loading": "正在加载旅行记录...",

      // Cat
      "cat.title": "这是 Luna",
      "cat.bio": "首席士气官。她喜欢在键盘上打盹、追逐激光笔，以及审判我的代码。",
      "cat.breed": "品种",
      "cat.breedValue": "英国短毛猫",
      "cat.age": "年龄",
      "cat.ageValue": "2 岁",
      "cat.favToy": "最爱玩具",
      "cat.favToyValue": "纸箱",
      "cat.superpower": "超能力",
      "cat.superpowerValue": "50Hz 呼噜声",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
