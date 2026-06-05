import HeroVideo from "@/components/HeroVideo";
import WorksGrid from "@/components/WorksGrid";

export default function HomePage() {
  return (
    <main>
      <HeroVideo
        videoUrl="http://43.128.2.110/videos/hero-bg.mp4"
        title="AIGC TEAM"
        tagline="Coming soon — works loading."
      />
      <WorksGrid />
    </main>
  );
}
