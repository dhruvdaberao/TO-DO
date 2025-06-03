
export const FunMessages = () => {
  const messages = [
    {
      emoji: "🎮",
      text: "Level 27 unlocked! New skills: Adult responsibilities (optional)",
      color: "text-cyan-300"
    },
    {
      emoji: "⚡", 
      text: "Warning: This birthday may cause excessive awesomeness!",
      color: "text-blue-300"
    },
    {
      emoji: "🚀",
      text: "27 years of being ridiculously cool. Mission: Continue!",
      color: "text-indigo-300"
    },
    {
      emoji: "🎯",
      text: "Fun Fact: You're now 27 years closer to becoming a wizard!",
      color: "text-emerald-300"
    },
    {
      emoji: "⭐",
      text: "Breaking News: Local legend turns 27, world celebrates!",
      color: "text-amber-300"
    },
    {
      emoji: "🔥",
      text: "Sangram at 27: Still setting the bar ridiculously high!",
      color: "text-orange-300"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in">
        🎊 Epic Birthday Vibes & Random Awesomeness! 🎊
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 animate-fade-in hover:border-cyan-400/50"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-6xl text-center mb-4 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
              {message.emoji}
            </div>
            <p className={`text-lg font-semibold text-center ${message.color}`}>
              {message.text}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold text-2xl py-4 px-8 rounded-full inline-block shadow-2xl animate-pulse hover:scale-105 transition-transform">
          🎂 Let's Make This Birthday LEGENDARY! 🎂
        </div>
      </div>
    </div>
  );
};
