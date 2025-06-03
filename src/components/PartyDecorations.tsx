
export const PartyDecorations = () => {
  return (
    <>
      {/* Floating Balloons */}
      <div className="fixed top-10 left-10 animate-bounce" style={{ animationDelay: '0s' }}>
        <div className="w-8 h-12 bg-red-500 rounded-full shadow-lg"></div>
        <div className="w-1 h-16 bg-gray-600 mx-auto"></div>
      </div>
      
      <div className="fixed top-20 left-32 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="w-6 h-10 bg-blue-500 rounded-full shadow-lg"></div>
        <div className="w-1 h-12 bg-gray-600 mx-auto"></div>
      </div>
      
      <div className="fixed top-16 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-7 h-11 bg-yellow-500 rounded-full shadow-lg"></div>
        <div className="w-1 h-14 bg-gray-600 mx-auto"></div>
      </div>
      
      <div className="fixed top-32 right-32 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <div className="w-8 h-12 bg-green-500 rounded-full shadow-lg"></div>
        <div className="w-1 h-16 bg-gray-600 mx-auto"></div>
      </div>
      
      {/* Floating Party Elements */}
      <div className="fixed bottom-20 left-20 text-4xl animate-spin" style={{ animationDuration: '3s' }}>
        🎊
      </div>
      
      <div className="fixed bottom-32 right-20 text-4xl animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
        🎉
      </div>
      
      <div className="fixed top-1/2 left-8 text-3xl animate-pulse">
        ✨
      </div>
      
      <div className="fixed top-1/3 right-8 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>
        ⭐
      </div>
    </>
  );
};
