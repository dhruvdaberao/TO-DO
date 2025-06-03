
export const QuirkyElements = () => {
  return (
    <>
      {/* Floating Birthday Elements */}
      <div className="fixed top-1/4 left-4 sm:left-8 text-2xl sm:text-3xl animate-bounce z-20" style={{ animationDelay: '0s', animationDuration: '2s' }}>
        🎂
      </div>
      
      <div className="fixed top-1/3 right-4 sm:right-8 text-2xl sm:text-3xl animate-bounce z-20" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>
        🎁
      </div>
      
      <div className="fixed bottom-1/4 left-4 sm:left-12 text-xl sm:text-2xl animate-spin z-20" style={{ animationDuration: '4s' }}>
        🎪
      </div>
      
      <div className="fixed bottom-1/3 right-4 sm:right-12 text-xl sm:text-2xl animate-spin z-20" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
        🎭
      </div>
      
      {/* Quirky Floating Messages */}
      <div className="fixed top-16 left-1/4 hidden sm:block text-xs lg:text-sm text-cyan-300 bg-black/20 px-2 py-1 rounded-full animate-pulse font-mono z-20">
        Level 27 Unlocked! 🔓
      </div>
      
      <div className="fixed top-20 right-1/4 hidden sm:block text-xs lg:text-sm text-amber-300 bg-black/20 px-2 py-1 rounded-full animate-pulse font-mono z-20" style={{ animationDelay: '1s' }}>
        Achievement: Born Awesome! 🏆
      </div>
      
      <div className="fixed bottom-16 left-1/3 hidden lg:block text-xs text-emerald-300 bg-black/20 px-2 py-1 rounded-full animate-pulse font-mono z-20" style={{ animationDelay: '2s' }}>
        Status: Legendary 👑
      </div>
      
      {/* Interactive Quirky Elements */}
      <div className="fixed top-1/2 left-2 sm:left-4 text-lg sm:text-xl hover:text-2xl sm:hover:text-3xl transition-all duration-300 cursor-pointer z-20 hover:rotate-12">
        🚀
      </div>
      
      <div className="fixed top-1/2 right-2 sm:right-4 text-lg sm:text-xl hover:text-2xl sm:hover:text-3xl transition-all duration-300 cursor-pointer z-20 hover:-rotate-12">
        ⚡
      </div>
      
      {/* Age Counter Animation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20 z-20">
        <span className="text-white text-xs sm:text-sm font-mono animate-pulse">
          🎯 Age: <span className="text-cyan-300 font-bold">27</span> | 
          <span className="text-amber-300 font-bold"> Coolness: ∞</span>
        </span>
      </div>
    </>
  );
};
