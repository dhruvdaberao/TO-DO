
import { BirthdayHero } from "@/components/BirthdayHero";
import { VideoSection } from "@/components/VideoSection";
import { CosmicBirthday } from "@/components/CosmicBirthday";
import { PartyDecorations } from "@/components/PartyDecorations";
import { Confetti } from "@/components/Confetti";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <Confetti />
      <PartyDecorations />
      
      <div className="relative z-10 w-full">
        <BirthdayHero />
        <VideoSection />
        <CosmicBirthday />
      </div>
    </div>
  );
};

export default Index;
