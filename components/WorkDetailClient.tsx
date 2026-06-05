"use client";

import { Work, typeLabels } from "@/lib/data";
import { useState } from "react";

interface Props {
  work: Work;
}

export default function WorkDetailClient({ work }: Props) {
  const [showPostmortem, setShowPostmortem] = useState(false);

  return (
    <article className="max-w-5xl mx-auto px-6 pb-24">
      {/* 视频播放器 */}
      {work.videoUrl && (
        <div className="w-full aspect-video bg-black rounded-sm overflow-hidden mb-10">
          <video
            src={work.videoUrl}
            controls
            className="w-full h-full object-contain"
            poster={work.coverImage}
          />
        </div>
      )}

      {/* 图片组（图片作品） */}
      {work.images && work.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {work.images.map((src, i) => (
            <div
              key={i}
              className="aspect-video bg-zinc-800 rounded-sm overflow-hidden flex items-center justify-center"
            >
              <span className="text-zinc-500 text-xs">图片占位 {i + 1}</span>
            </div>
          ))}
        </div>
      )}

      {/* 标题区 */}
      <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
        <div>
          <span className="text-xs text-[#E8FF00] tracking-widest uppercase mb-2 block">
            {typeLabels[work.type]} · {work.year}
            {work.duration && ` · ${work.duration}`}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {work.title}
          </h1>
        </div>
      </div>

      {/* 一句话简介 */}
      <p className="text-white/60 text-lg italic border-l-2 border-[#E8FF00]/40 pl-4 mb-8">
        {work.tagline}
      </p>

      {/* 详细介绍 */}
      <p className="text-white/80 leading-relaxed text-base mb-10">
        {work.description}
      </p>

      {/* 标签 */}
      <div className="flex gap-2 flex-wrap mb-10">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/40 border border-white/10 px-3 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 主创名单 */}
      {work.credits && work.credits.length > 0 && (
        <div className="border-t border-white/10 pt-8 mb-10">
          <h3 className="text-xs tracking-widest uppercase text-white/30 mb-4">
            主创
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {work.credits.map(({ role, name }) => (
              <div key={role}>
                <p className="text-xs text-white/30 mb-0.5">{role}</p>
                <p className="text-sm text-white/70">{name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 隐藏的复盘入口 — 低调展示，不影响主视觉 */}
      {work.postmortemUrl && (
        <div className="border-t border-white/5 pt-6">
          <button
            onClick={() => setShowPostmortem(!showPostmortem)}
            className="text-xs text-white/20 hover:text-white/50 tracking-widest uppercase transition-colors"
          >
            {showPostmortem ? "收起" : "创作手记 →"}
          </button>
          {showPostmortem && (
            <div className="mt-4 p-4 bg-zinc-900/50 rounded-sm border border-white/5">
              <p className="text-white/40 text-sm">
                完整复盘文档：
                <a
                  href={work.postmortemUrl}
                  className="text-[#E8FF00]/60 hover:text-[#E8FF00] underline ml-1"
                >
                  {work.postmortemUrl}
                </a>
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
