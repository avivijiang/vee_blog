import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-200 group"
      data-testid="language-switcher"
    >
      <motion.span 
        key={currentLang}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        {currentLang === "en" ? "中文" : "EN"}
      </motion.span>
    </button>
  );
}
