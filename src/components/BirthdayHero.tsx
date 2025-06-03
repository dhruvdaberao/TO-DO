
import { Cake, Gift } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <div className="text-center py-20 px-4">
      <div className="animate-bounce mb-8">
        <Cake className="w-24 h-24 mx-auto text-yellow-300 drop-shadow-lg" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 animate-pulse">
        🎉 HAPPY BIRTHDAY! 🎉
      </h1>
      
      <div className="text-2xl md:text-4xl text-yellow-200 font-bold mb-8 animate-fade-in">
        Hope your special day is absolutely amazing! 🎂
      </div>
      
      <div className="flex justify-center space-x-4 animate-scale-in">
        <Gift className="w-12 h-12 text-pink-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Gift className="w-12 h-12 text-blue-300 animate-bounce" style={{ animationDelay: '1s' }} />
        <Gift className="w-12 h-12 text-green-300 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};
