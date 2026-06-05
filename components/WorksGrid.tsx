"use client";

import { useState } from "react";
import { works, WorkType, typeLabels } from "@/lib/data";
import WorkCard from "./WorkCard";

const filters: { label: string; value: WorkType | "all" }[] = [
  { label: "全部", value: "all" },
  { label: "短片", value: "short-film" },
  { label: "短剧", value: "series" },
  { label: "短视频", value: "short-video" },
  { label: "图片", value: "image" },
];

export default function WorksGrid() {
  const [active, setActive] = useState<WorkType | "all">("all");

  const filtered =
    active === "all" ? works : works.filter((w) => w.type === active);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* 区块标题 */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-2xl font-bold text-white tracking-tight">作品</h2>
        <span className="text-white/30 text-sm">{filtered.length} 件</span>
      </div>

      {/* 筛选栏 */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`text-xs tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
              active === value
                ? "border-[#E8FF00] text-[#E8FF00] bg-[#E8FF00]/5"
                : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
