import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于 — AIGC TEAM",
  description: "我们是一支风格不限、突破极限的 AIGC 创作团队。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* 标签 */}
        <p className="text-xs text-[#E8FF00] tracking-[0.3em] uppercase mb-6">
          关于我们
        </p>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-10">
          风格不限
          <br />
          <span className="text-white/30">突破极限</span>
        </h1>

        {/* 团队介绍 */}
        <div className="space-y-6 text-white/70 text-base leading-relaxed mb-16">
          <p>
            我们是一支专注于 AIGC 创作的独立团队，相信人工智能正在重新定义视觉叙事的边界。
            从科幻短片到青春短剧，从极简图像到高能商业短视频，
            我们不设风格边界，只设质量底线。
          </p>
          <p>
            每一件作品都是一次实验——关于 AI 工具的边界，关于叙事的可能，
            也关于我们自己作为创作者的位置。
          </p>
          <p>
            我们接受有创意野心的商业合作，也乐于和对 AIGC 创作感兴趣的品牌一起探索新的表达形式。
          </p>
        </div>

        {/* 工具栈 */}
        <div className="mb-16">
          <h2 className="text-xs tracking-widest uppercase text-white/30 mb-5">
            主要工具
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Midjourney",
              "Runway",
              "Kling",
              "Sora",
              "Suno",
              "Premiere",
              "After Effects",
              "Python",
            ].map((tool) => (
              <span
                key={tool}
                className="text-sm text-white/50 border border-white/10 px-3 py-1.5 rounded-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 商单入口 */}
        <div className="border border-white/10 rounded-sm p-8">
          <h2 className="text-lg font-semibold text-white mb-3">商业合作</h2>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            如果你是品牌方或制片公司，想探索 AIGC 在商业项目中的应用，
            我们很乐意聊聊。请通过以下方式联系我们：
          </p>
          <a
            href="mailto:contact@aigcteam.com"
            className="inline-flex items-center gap-2 text-[#E8FF00] text-sm tracking-wider hover:underline"
          >
            contact@aigcteam.com →
          </a>
        </div>

        {/* 页脚链接 */}
        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs text-white/30 hover:text-white tracking-widest uppercase transition-colors"
          >
            ← 返回作品
          </Link>
          <span className="text-xs text-white/20">© 2026 AIGC TEAM</span>
        </div>
      </div>
    </main>
  );
}
