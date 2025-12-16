import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import catImage from "@assets/generated_images/cute_cat_portrait_for_personal_blog.png";

export default function Cat() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      <LanguageSwitcher />
      <main className="container mx-auto px-4 pt-32 pb-12 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
             <img 
               src={catImage} 
               alt="My Cat" 
               className="w-full h-full object-cover"
             />
          </div>
          
          <h1 className="text-4xl font-display font-bold mb-4">{t("cat.title")}</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            {t("cat.bio")}
          </p>

          <div className="grid grid-cols-2 gap-4 text-left bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
             <div>
               <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">{t("cat.breed")}</h3>
               <p className="font-display font-medium">{t("cat.breedValue")}</p>
             </div>
             <div>
               <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">{t("cat.age")}</h3>
               <p className="font-display font-medium">{t("cat.ageValue")}</p>
             </div>
             <div>
               <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">{t("cat.favToy")}</h3>
               <p className="font-display font-medium">{t("cat.favToyValue")}</p>
             </div>
             <div>
               <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">{t("cat.superpower")}</h3>
               <p className="font-display font-medium">{t("cat.superpowerValue")}</p>
             </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
