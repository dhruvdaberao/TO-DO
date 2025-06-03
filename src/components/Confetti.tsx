
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
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b", "#eb4d4b", "#6c5ce7"];
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
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
