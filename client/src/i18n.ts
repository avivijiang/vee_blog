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
      "home.greeting": "Hi, I'm Vee.",
      "home.bio": "I'm a Frontend Developer who loves exploring the world, learning new things, and turning ideas into beautiful web experiences.",
      "home.letsTalk": "Let's Talk",
      "home.collaborate": "Collaborate",
      "home.resume": "Resume & Experience",
      "home.currentRole": "Senior Frontend Developer @ Didi",
      "home.thinkingAI": "Thinking in AI",
      "home.aiSubtitle": "Generative UI & LLMs",
      "home.wanderlust": "Wanderlust",
      "home.travelSubtitle": "Seeing the world, one journey at a time.",
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
      "cat.title": "Meet Pipi",
      "cat.bio": "A playful and mischievous explorer! He loves playing with small balls, enjoys cat treats, and has an adventurous spirit that keeps life interesting.",
      "cat.breed": "Breed",
      "cat.breedValue": "British Longhair",
      "cat.age": "Age",
      "cat.ageValue": "1 Year Old",
      "cat.favToy": "Favorite Toy",
      "cat.favToyValue": "Small Ball",
      "cat.favFood": "Favorite Food",
      "cat.favFoodValue": "Cat Treats",
      "cat.personality": "Personality",
      "cat.personalityValue": "Adventurous Explorer",
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
      "home.greeting": "你好，我是 Vee。",
      "home.bio": "我是一名前端开发工程师，热爱旅行、见识世界，也喜欢学习新事物，把创意变成精美的网页体验。",
      "home.letsTalk": "联系我",
      "home.collaborate": "合作洽谈",
      "home.resume": "简历与经历",
      "home.currentRole": "资深前端开发工程师 @ 滴滴",
      "home.thinkingAI": "AI 思考",
      "home.aiSubtitle": "生成式 UI 与大语言模型",
      "home.wanderlust": "旅行日志",
      "home.travelSubtitle": "用脚步丈量世界，用心感受每一程。",
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
      "cat.title": "这是皮皮",
      "cat.bio": "一只调皮爱玩的小探险家！他喜欢玩小球，最爱吃猫条，具有探索精神，让生活充满乐趣。",
      "cat.breed": "品种",
      "cat.breedValue": "英国长毛猫",
      "cat.age": "年龄",
      "cat.ageValue": "1 岁",
      "cat.favToy": "最爱玩具",
      "cat.favToyValue": "小球",
      "cat.favFood": "最爱食物",
      "cat.favFoodValue": "猫条",
      "cat.personality": "性格",
      "cat.personalityValue": "调皮探险家",
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
