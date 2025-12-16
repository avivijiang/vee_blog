import { Navigation } from "@/components/Navigation";
import { BentoGrid } from "@/components/BentoGrid";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      <LanguageSwitcher />
      <main className="container mx-auto px-4 pb-12">
        <BentoGrid />
      </main>
    </div>
  );
}
