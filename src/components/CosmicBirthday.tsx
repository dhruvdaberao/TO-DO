
export const CosmicBirthday = () => {
  const birthFacts = [
    {
      emoji: "🗓️",
      title: "You were born on:",
      content: "Sunday, June 21, 1998\n(The sunniest day of the week—you were literally born to shine!)",
      color: "text-amber-300"
    },
    {
      emoji: "🌞", 
      title: "Zodiac Sign:",
      content: "You're a Gemini-Cancer Cusp – the magical edge where air meets water.\nThis makes you:\n• Emotionally intelligent 💙\n• Creatively expressive 🎨\n• Dual-wired: logic & intuition 🧠💡\n• A deep thinker who feels everything with purpose.",
      color: "text-blue-300"
    },
    {
      emoji: "🔮",
      title: "Your Element:",
      content: "Water & Air —\nA rare blend that means you're able to adapt, flow, and dream big.\n(And let's be honest—you probably get mood swings that even confuse yourself sometimes 😄)",
      color: "text-cyan-300"
    },
    {
      emoji: "🌌",
      title: "Ruling Planet(s):",
      content: "Mercury & Moon\nThis combo makes you an incredible communicator and a soul with depth.\nYou can make people laugh, think, or cry — sometimes all at once.",
      color: "text-indigo-300"
    },
    {
      emoji: "🌍",
      title: "Fun World Facts from Your Birthday:",
      content: "• Google was only a few months old — you're older than Google! 😮\n• 'Harry Potter and the Chamber of Secrets' had just been published 📚\n• 1998 FIFA World Cup was happening in France ⚽\n• The June solstice happened on your birthday — the longest day of the year 🌞",
      color: "text-emerald-300"
    },
    {
      emoji: "🧠",
      title: "You Probably Didn't Know This...",
      content: "• The Moon phase on your birth night was Waning Gibbous — a symbol of reflection, purpose, and transformation.\n• In numerology, 21/06/1998 = Life Path Number 1 – the number of leaders and pioneers.\n• Your birth flower is the Rose — symbol of love and courage. 🌹\n• Your birthstone is the Pearl – rare, elegant, and created through time and pressure... like your awesomeness.",
      color: "text-purple-300"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-white text-center mb-4 animate-fade-in">
        💫 Born Under Cosmic Magic — June 21, 1998
      </h2>
      
      <p className="text-2xl text-cyan-300 text-center mb-16 animate-fade-in">
        Did you know, Sangram...?<br/>
        <span className="text-lg text-white/80">Your birthday isn't just a date—it's a cosmic event. Let's see what makes June 21, 1998 special:</span>
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {birthFacts.map((fact, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 animate-fade-in hover:border-cyan-400/50"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-6xl text-center mb-4 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
              {fact.emoji}
            </div>
            <h3 className={`text-xl font-bold text-center mb-4 ${fact.color}`}>
              {fact.title}
            </h3>
            <div className="text-white leading-relaxed whitespace-pre-line text-center">
              {fact.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
        <h3 className="text-3xl font-bold text-white text-center mb-6">🌟 So what does it all mean?</h3>
        <p className="text-lg text-white leading-relaxed text-center mb-6">
          Sangram, you're someone who bridges imagination with emotion.<br/>
          You carry joy and mystery in the same breath,<br/>
          and you leave a mark that can't be explained — only felt.
        </p>
        <p className="text-xl font-bold text-cyan-300 text-center mb-4">
          You weren't just born.<br/>
          You arrived with light. 🌈
        </p>
      </div>
      
      <div className="text-center">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold text-2xl py-4 px-8 rounded-full inline-block shadow-2xl animate-pulse hover:scale-105 transition-transform">
          🧡 From the stars to the screen — Happy Birthday, Sangram!
        </div>
        <p className="text-lg text-white/80 mt-4">
          Let this animation and this webpage be a little mirror of everything that makes you, you.
        </p>
      </div>
    </div>
  );
};
