
export const VideoSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in font-mono">
          🎬 Special Birthday Video Just For You! 🎬
        </h2>
        
        <div className="aspect-video bg-black/20 rounded-xl sm:rounded-2xl flex items-center justify-center border-4 border-dashed border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105">
          <div className="text-center text-white px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🎥</div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold mb-2 font-mono">Drop your amazing birthday video here!</p>
            <p className="text-xs sm:text-sm opacity-75 font-sans">Click to upload or drag and drop</p>
          </div>
        </div>
        
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-white/80 text-sm sm:text-base lg:text-lg font-sans">
            Can't wait to see what birthday magic you've created! 🌟
          </p>
        </div>
      </div>
    </div>
  );
};
