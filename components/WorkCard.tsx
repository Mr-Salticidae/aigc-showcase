import Link from "next/link";
import { Work, typeLabels } from "@/lib/data";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <article className="relative overflow-hidden bg-zinc-900 rounded-sm">
        {/* 封面 */}
        <div className="relative aspect-video overflow-hidden bg-zinc-800">
          {/* 占位封面（无图时显示） */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
            <span className="text-zinc-500 text-xs tracking-widest uppercase">
              {typeLabels[work.type]}
            </span>
          </div>

          {/* 悬停遮罩 */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

          {/* 时长标签 */}
          {work.duration && (
            <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/60 px-2 py-0.5 rounded-sm">
              {work.duration}
            </span>
          )}

          {/* 类型标签 */}
          <span className="absolute top-2 left-2 text-xs text-[#E8FF00] bg-black/60 px-2 py-0.5 rounded-sm tracking-wider">
            {typeLabels[work.type]}
          </span>
        </div>

        {/* 文字信息 */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#E8FF00] transition-colors">
            {work.title}
          </h3>
          <p className="text-white/50 text-sm line-clamp-2">{work.tagline}</p>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
