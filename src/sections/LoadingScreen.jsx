import { useEffect } from "react";
import logo from "../assets/10th.png"; // ✅ adapte le chemin si besoin

export const LoadingScreen = ({ onComplete }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // ⏱️ temps total avant disparition
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50  flex flex-col items-center justify-center overflow-hidden">
      {/* ✅ Effet de révélation de gauche à droite */}
      <div className="relative w-[70vw] sm:w-[50vw] md:w-[30vw] lg:w-[20vw] aspect-[1/1] overflow-hidden">
        <img
          src={logo}
          alt="Loading logo"
          className="w-full h-full object-contain animate-reveal-mask"
        />
      </div>
    </div>
  );
};
