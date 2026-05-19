"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const words = [
  "Hello",
  "Bonjour",
  "स्वागत है",
  "नमस्कार",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",
  "Guten Tag"
];

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (!finishedRef.current) {
      finishedRef.current = true;
      onFinish();
    }
  }, [onFinish]);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timer);
    } else {
      const closingTimer = setTimeout(() => setClosing(true), 200);
      const fallbackTimer = setTimeout(() => finish(), 200 + 1200);
      return () => {
        clearTimeout(closingTimer);
        clearTimeout(fallbackTimer);
      };
    }
  }, [currentWordIndex, finish]);

  const handleAnimationEnd = () => {
    if (closing) {
      finish();
    }
  };

  return (
    <>
      <style>{`
        @keyframes shutterUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .shutter-panel {
          animation: shutterUp 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 bg-[#080808] z-[99999] flex items-center justify-center ${closing ? "shutter-panel" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <h1 className="text-white text-4xl md:text-6xl tracking-tight transition-opacity duration-300 font-bold">
          • {words[currentWordIndex]}
        </h1>
      </div>
    </>
  );
};

export default LoadingScreen;
