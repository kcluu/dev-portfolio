export interface Project {
  name: string;
  description: string;
  tags: string[];
  href: string;
  demoHref?: string;
  previewGif?: string;
}

export const featuredProjects: Project[] = [
  {
    name: "Encore: Fan Score",
    description:
      "A fan scoring platform that lets you connect your Spotify account or upload your listening data, search for your favorite artists, and discover a personalized Fan Score based on factors like listening frequency, recency, and how long you've been listening to an artist.",
    tags: ["React", "TypeScript"],
    href: "https://github.com/kcluu/encore",
    demoHref: "https://encore-music.vercel.app/",
    previewGif: "/projects/encore-fan-score.gif",
  },
  {
    name: "My Dev Website",
    description:
      "This website! An excuse to play around with code and styling, and keep my portfolio up-to-date.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    href: "https://github.com/kcluu/dev-portfolio",
  },
];
