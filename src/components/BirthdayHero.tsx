
import { Cake, Zap } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <div className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="animate-bounce mb-6 sm:mb-8">
        <Cake className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto text-amber-400 drop-shadow-lg" />
      </div>
      
      <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 animate-pulse font-mono tracking-wider">
        🎂 Happy 27th Birthday, Sangram! 🎉
      </h1>
      
      <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-cyan-300 font-bold mb-6 sm:mb-8 animate-fade-in italic font-serif">
        You're not just a year older—you're a whole level cooler.
      </div>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-cyan-400/30">
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-4 sm:mb-6 font-sans">
          Hey Sangram,
        </p>
        
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-4 sm:mb-6 font-sans">
          Today isn't just another page on the calendar—it's the launch day of version <span className="text-cyan-300 font-bold bg-slate-800/50 px-2 py-1 rounded font-mono text-sm sm:text-base lg:text-lg">Sangram 2.7</span>!<br className="hidden sm:block"/>
          And trust me, this update comes with better performance, stronger wisdom, and…<br className="hidden sm:block"/>
          <span className="text-amber-300 font-bold">an unlimited supply of cake and awesomeness. 😎🍰</span>
        </p>
        
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-4 sm:mb-6 font-sans">
          From one creative soul to another, I've built this little world just for you—<br className="hidden sm:block"/>
          a tiny tribute to your amazingness, your laughter, your strength, and your stories.<br className="hidden sm:block"/>
          You've inspired people more than you know (including me).
        </p>
        
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-4 sm:mb-6 font-sans">
          So hit that play button, dive into the animation, and let this mini-universe throw you<br className="hidden sm:block"/>
          a <span className="text-cyan-300 font-bold">celebration coded with love, animated with joy, and designed just for you.</span>
        </p>
        
        <div className="bg-slate-800/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-3 sm:mb-4 font-mono">Here's to:</h3>
          <ul className="text-left space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg font-sans">
            <li className="flex items-start"><span className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">✨</span> <span>All the memories we've created</span></li>
            <li className="flex items-start"><span className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">🎨</span> <span>All the dreams you'll bring to life</span></li>
            <li className="flex items-start"><span className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">🚀</span> <span>And all the magic still ahead</span></li>
          </ul>
        </div>
        
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-sans">
          Happy Birthday, bro. Keep being legendary.<br/>
          With all heart,<br/>
          <span className="text-cyan-300 font-bold text-lg sm:text-xl lg:text-2xl font-mono">— Dhruv</span>
        </p>
      </div>
      
      <div className="flex justify-center space-x-2 sm:space-x-4 animate-scale-in">
        <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cyan-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 animate-bounce" style={{ animationDelay: '1s' }} />
        <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-indigo-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};
