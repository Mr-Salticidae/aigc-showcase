import { notFound } from "next/navigation";
import Link from "next/link";
import { getWorkBySlug, works } from "@/lib/data";
import WorkDetailClient from "@/components/WorkDetailClient";

// 静态路由生成
export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const work = getWorkBySlug(params.slug);
  if (!work) return {};
  return {
    title: `${work.title} — AIGC TEAM`,
    description: work.tagline,
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();

  return (
    <main className="min-h-screen pt-16">
      {/* 返回按钮 */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm tracking-widest uppercase transition-colors"
        >
          <span>←</span>
          <span>返回</span>
        </Link>
      </div>

      <WorkDetailClient work={work} />
    </main>
  );
}
