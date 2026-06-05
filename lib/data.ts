export type WorkType = "short-film" | "series" | "image" | "short-video";

export interface Work {
  slug: string;
  title: string;
  type: WorkType;
  year: number;
  duration?: string;
  coverImage: string;
  videoUrl?: string;
  images?: string[];
  tagline: string;
  description: string;
  tags: string[];
  postmortemUrl?: string;
  credits?: { role: string; name: string }[];
}

export const works: Work[] = [];

export const typeLabels: Record<WorkType, string> = {
  "short-film": "short film",
  series: "series",
  image: "image",
  "short-video": "short video",
};

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getWorksByType(type: WorkType): Work[] {
  return works.filter((w) => w.type === type);
}
