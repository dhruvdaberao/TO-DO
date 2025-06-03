
import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  color: string;
}

export const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];
    const pieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setConfetti(pieces);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute w-2 h-2 animate-pulse"
            style={{
              left: `${piece.left}%`,
              backgroundColor: piece.color,
              animation: `fall 3s linear infinite`,
              animationDelay: `${piece.animationDelay}s`
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};
