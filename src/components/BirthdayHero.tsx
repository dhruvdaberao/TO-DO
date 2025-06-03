
import { Cake, Zap } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <div className="text-center py-20 px-4">
      <div className="animate-bounce mb-8">
        <Cake className="w-24 h-24 mx-auto text-amber-400 drop-shadow-lg" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 animate-pulse">
        🎂 Happy 27th Birthday, Sangram! 🎉
      </h1>
      
      <div className="text-2xl md:text-4xl text-cyan-300 font-bold mb-8 animate-fade-in italic">
        You're not just a year older—you're a whole level cooler.
      </div>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-cyan-400/30">
        <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
          Hey Sangram,
        </p>
        
        <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
          Today isn't just another page on the calendar—it's the launch day of version <span className="text-cyan-300 font-bold bg-slate-800/50 px-2 py-1 rounded font-mono">Sangram 2.7</span>!<br/>
          And trust me, this update comes with better performance, stronger wisdom, and…<br/>
          <span className="text-amber-300 font-bold">an unlimited supply of cake and awesomeness. 😎🍰</span>
        </p>
        
        <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
          From one creative soul to another, I've built this little world just for you—<br/>
          a tiny tribute to your amazingness, your laughter, your strength, and your stories.<br/>
          You've inspired people more than you know (including me).
        </p>
        
        <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
          So hit that play button, dive into the animation, and let this mini-universe throw you<br/>
          a <span className="text-cyan-300 font-bold">celebration coded with love, animated with joy, and designed just for you.</span>
        </p>
        
        <div className="bg-slate-800/30 rounded-xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Here's to:</h3>
          <ul className="text-left space-y-3 text-lg">
            <li className="flex items-center"><span className="text-2xl mr-3">✨</span> All the memories we've created</li>
            <li className="flex items-center"><span className="text-2xl mr-3">🎨</span> All the dreams you'll bring to life</li>
            <li className="flex items-center"><span className="text-2xl mr-3">🚀</span> And all the magic still ahead</li>
          </ul>
        </div>
        
        <p className="text-lg md:text-xl text-white leading-relaxed">
          Happy Birthday, bro. Keep being legendary.<br/>
          With all heart,<br/>
          <span className="text-cyan-300 font-bold text-2xl">— Dhruv</span>
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
