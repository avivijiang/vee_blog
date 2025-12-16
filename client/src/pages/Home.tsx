import { Navigation } from "@/components/Navigation";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      <main className="container mx-auto px-4 pb-12">
        <BentoGrid />
      </main>
    </div>
  );
}
