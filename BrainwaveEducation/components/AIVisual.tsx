
import React, { useState, useEffect } from 'react';
import { generateNeuroImage } from '../services/imageService';

interface AIVisualProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "16:9" | "1:1" | "4:3";
}

const AIVisual: React.FC<AIVisualProps> = ({ prompt, alt, className = "", aspectRatio = "16:9" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateNeuroImage(prompt);
      if (isMounted && url) {
        setImageUrl(url);
        setLoading(false);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [prompt]);

  const aspectClass = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]"
  }[aspectRatio];

  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-slate-800/50 border border-white/5 shadow-2xl ${aspectClass} ${className}`}>
      {loading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 animate-pulse">
            AI Rendering Visual...
          </span>
        </div>
      ) : (
        <img 
          src={imageUrl || ""} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          style={{ opacity: 0, transition: 'opacity 1s ease-in-out' }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default AIVisual;
