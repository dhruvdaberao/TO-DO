
export const VideoSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
        <h2 className="text-4xl font-bold text-white text-center mb-8 animate-fade-in">
          🎬 Special Birthday Video Just For You! 🎬
        </h2>
        
        <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center border-4 border-dashed border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🎥</div>
            <p className="text-xl font-semibold mb-2">Drop your amazing birthday video here!</p>
            <p className="text-sm opacity-75">Click to upload or drag and drop</p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-white/80 text-lg">
            Can't wait to see what birthday magic you've created! 🌟
          </p>
        </div>
      </div>
    </div>
  );
};
