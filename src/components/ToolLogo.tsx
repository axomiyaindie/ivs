"use client";
import { useState } from "react";

interface ToolLogoProps {
  domain: string;
  title: string;
  size?: number;
}

export default function ToolLogo({ domain, title, size = 48 }: ToolLogoProps) {
  const [imgSrc, setImgSrc] = useState(`https://logos.hunter.io/${domain}`);
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);

  const fallbackSources = [
    `https://logos.hunter.io/${domain}`,
    `https://icons.duckduckgo.com/ip3/${domain}.png`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size * 2}`,
  ];

  const handleError = () => {
    if (attempt < fallbackSources.length - 1) {
      setAttempt(attempt + 1);
      setImgSrc(fallbackSources[attempt + 1]);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div 
        className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span className="text-2xl">🔧</span>
      </div>
    );
  }

  return (
    <div 
      className="bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={imgSrc}
        alt={`${title} logo`}
        className="w-full h-full object-contain p-2"
        onError={handleError}
      />
    </div>
  );
}