
export const GifSection = () => {
  const birthdayGifs = [
    {
      id: 1,
      src: "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif",
      alt: "Happy Birthday Dancing",
      title: "Let's Dance! 🕺"
    },
    {
      id: 2,
      src: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
      alt: "Birthday Confetti",
      title: "Confetti Time! 🎊"
    },
    {
      id: 3,
      src: "https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif",
      alt: "Birthday Cake",
      title: "Cake O'Clock! 🎂"
    },
    {
      id: 4,
      src: "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
      alt: "Birthday Party",
      title: "Party Mode ON! 🎉"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 animate-bounce font-mono">
        🎬 Birthday Vibes in Motion! 🎬
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {birthdayGifs.map((gif, index) => (
          <div
            key={gif.id}
            className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 hover:border-cyan-400/50 group cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden mb-3 relative">
              <img
                src={gif.src}
                alt={gif.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-cyan-300 text-center font-mono">
              {gif.title}
            </h3>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6 sm:mt-8">
        <p className="text-white/80 text-sm sm:text-base lg:text-lg font-sans animate-pulse">
          These GIFs captured the exact moment when awesomeness was born! 🌟
        </p>
      </div>
    </div>
  );
};
