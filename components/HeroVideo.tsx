"use client";

import { useRef, useEffect } from "react";

interface HeroVideoProps {
  videoUrl: string;
  title: string;
  tagline: string;
}

export default function HeroVideo({ videoUrl, title, tagline }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 视频背景 */}
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />

      {/* 定位语 — 左下角 */}
      <div className="absolute bottom-16 left-6 md:left-12 max-w-xl">
        <p className="text-xs tracking-[0.3em] uppercase text-[#E8FF00] mb-3">
          风格不限 · 突破极限
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
          {title}
        </h1>
        <p className="text-white/70 text-base md:text-lg">{tagline}</p>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-white/60 animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
