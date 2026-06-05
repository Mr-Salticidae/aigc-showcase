import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "AIGC TEAM — 风格不限 · 突破极限",
  description: "我们是一支 AIGC 创作团队，用人工智能突破视觉边界。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
