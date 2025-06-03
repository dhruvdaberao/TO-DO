
import { BirthdayHero } from "@/components/BirthdayHero";
import { VideoSection } from "@/components/VideoSection";
import { FunMessages } from "@/components/FunMessages";
import { PartyDecorations } from "@/components/PartyDecorations";
import { Confetti } from "@/components/Confetti";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <Confetti />
      <PartyDecorations />
      
      <div className="relative z-10">
        <BirthdayHero />
        <VideoSection />
        <FunMessages />
      </div>
    </div>
  );
};

export default Index;
