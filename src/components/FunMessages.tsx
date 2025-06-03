
export const FunMessages = () => {
  const messages = [
    {
      emoji: "🎂",
      text: "Another year older, another year more awesome!",
      color: "text-yellow-300"
    },
    {
      emoji: "🎈", 
      text: "May your day be filled with happiness and your year with joy!",
      color: "text-pink-300"
    },
    {
      emoji: "🎁",
      text: "Birthdays are nature's way of telling us to eat more cake!",
      color: "text-blue-300"
    },
    {
      emoji: "🌟",
      text: "You're not getting older, you're just becoming a classic!",
      color: "text-green-300"
    },
    {
      emoji: "🎊",
      text: "Hope your birthday is as special as you are to everyone!",
      color: "text-purple-300"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in">
        🎉 Birthday Wishes & Fun Stuff! 🎉
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 animate-fade-in"
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
        <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold text-2xl py-4 px-8 rounded-full inline-block shadow-2xl animate-pulse">
          🎂 Let's Party! Time to Celebrate! 🎂
        </div>
      </div>
    </div>
  );
};
