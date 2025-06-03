
import { BirthdayHero } from "@/components/BirthdayHero";
import { VideoSection } from "@/components/VideoSection";
import { CosmicBirthday } from "@/components/CosmicBirthday";
import { GifSection } from "@/components/GifSection";
import { PartyDecorations } from "@/components/PartyDecorations";
import { QuirkyElements } from "@/components/QuirkyElements";
import { Confetti } from "@/components/Confetti";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <Confetti />
      <PartyDecorations />
      <QuirkyElements />
      
      <div className="relative z-10 w-full">
        <BirthdayHero />
        <GifSection />
        <VideoSection />
        <CosmicBirthday />
      </div>
      
      {/* Quirky Footer */}
      <div className="relative z-10 text-center py-8 border-t border-white/10">
        <p className="text-white/60 text-sm font-mono animate-pulse">
          🎊 Powered by Birthday Magic & Coded with ❤️ 🎊
        </p>
      </div>
    </div>
  );
};

export default Index;
