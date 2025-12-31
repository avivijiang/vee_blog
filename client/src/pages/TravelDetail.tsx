import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TravelDetail() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh";
  const [, setLocation] = useLocation();
  
  const params = new URLSearchParams(window.location.search);
  const url = params.get("url");
  const title = params.get("title");

  const handleBack = () => {
    setLocation("/travel");
  };

  return (
    <div className="min-h-screen bg-gradient-animated bg-blobs bg-grain flex flex-col">
      <Navigation />
      <LanguageSwitcher />
      
      <div className="pt-24 px-4 pb-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-white/50 hover:shadow-md transition-shadow"
          data-testid="back-button"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">{isZh ? "返回旅行日志" : "Back to Travel"}</span>
        </button>
      </div>

      <div className="flex-1 px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[70vh]">
          <div className="p-4 border-b bg-neutral-50">
            <h1 className="font-display font-bold text-lg">{title || (isZh ? "旅行日志" : "Travel Journal")}</h1>
          </div>
          {url ? (
            <iframe
              src={url}
              className="w-full h-full min-h-[65vh]"
              title={title || "Travel article"}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              {isZh ? "无法加载文章" : "Unable to load article"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
