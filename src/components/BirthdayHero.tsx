
import { Cake, Zap } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <div className="text-center py-20 px-4">
      <div className="animate-bounce mb-8">
        <Cake className="w-24 h-24 mx-auto text-amber-400 drop-shadow-lg" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 animate-pulse">
        🎉 HAPPY 27TH BIRTHDAY! 🎉
      </h1>
      
      <div className="text-2xl md:text-4xl text-cyan-300 font-bold mb-8 animate-fade-in">
        SANGRAM! 🚀
      </div>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-cyan-400/30">
        <p className="text-lg md:text-xl text-white leading-relaxed">
          Hey there, <span className="text-cyan-300 font-bold">Sangram</span>! 🎊 Welcome to the legendary age of 27! 
          They say this is when life gets really interesting - you're wise enough to know better, 
          but still young enough to ignore that wisdom completely! 😄 Here's to another year of 
          epic adventures, questionable decisions, and memories that'll make great stories later. 
          Time to celebrate like the absolute legend you are! 🌟
        </p>
      </div>
      
      <div className="flex justify-center space-x-4 animate-scale-in">
        <Zap className="w-12 h-12 text-cyan-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Zap className="w-12 h-12 text-blue-400 animate-bounce" style={{ animationDelay: '1s' }} />
        <Zap className="w-12 h-12 text-indigo-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};
