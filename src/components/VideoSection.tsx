
export const VideoSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in font-mono">
          🎬 Special Birthday Video Just For You! 🎬
        </h2>
        
        <div className="aspect-video bg-gradient-to-br from-black/30 via-purple-900/20 to-cyan-900/20 rounded-xl sm:rounded-2xl flex items-center justify-center border-4 border-dashed border-white/30 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-4 text-lg sm:text-xl animate-bounce">🎥</div>
          <div className="absolute top-4 right-4 text-lg sm:text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
          <div className="absolute bottom-4 left-4 text-lg sm:text-xl animate-bounce" style={{ animationDelay: '1s' }}>🎊</div>
          <div className="absolute bottom-4 right-4 text-lg sm:text-xl animate-bounce" style={{ animationDelay: '1.5s' }}>🎉</div>
          
          <div className="text-center text-white px-4 relative z-10">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🎬</div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold mb-2 font-mono group-hover:text-cyan-300 transition-colors duration-300">
              Drop your epic birthday video here!
            </p>
            <p className="text-xs sm:text-sm opacity-75 font-sans">
              Click to upload or drag and drop your masterpiece
            </p>
            
            {/* Quirky Loading Animation */}
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-white/80 text-sm sm:text-base lg:text-lg font-sans animate-pulse">
            Can't wait to see the legendary moments you've captured! 🌟✨
          </p>
        </div>
      </div>
    </div>
  );
};
