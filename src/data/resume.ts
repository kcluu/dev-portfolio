export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  location: string;
  dateRange: string;
  details: string[];
}

export const resumeHeader = {
  name: "Katelyn Luu",
  title: "Software Engineer",
  location: "New York, N.Y.",
  email: "kcluu16@gmail.com",
};

export const resumeSummary =
  "Software Engineer with 4+ years of experience building full-stack, user-facing products with a focus on frontend development, combining strong technical expertise with a background in design and film photography to bridge technology, user experience, and aesthetics.";

export const resumeSkills: ResumeSkillGroup[] = [
  {
    label: "languages",
    items: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Python",
      "Kotlin",
      "Ruby",
      "Java",
      "C#",
      "Swift",
    ],
  },
  {
    label: "frontend",
    items: [
      "React",
      "Next.js",
      "SWR",
      "Redux",
      "Tailwind CSS",
      "Storybook",
      "Vite",
      "Webpack",
    ],
  },
  {
    label: "backend",
    items: [
      "Node.js",
      "Ruby on Rails",
      "JPA",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "OpenAPI/Swagger",
      "Elasticsearch",
      "RabbitMQ",
      "Pusher",
      "WebSockets",
    ],
  },
  {
    label: "tooling",
    items: [
      "Jest",
      "React Testing Library",
      "Postman",
      "Docker",
      "Kubernetes",
      "CircleCI",
      "Spinnaker",
      "Datadog",
      "i18n",
    ],
  },
];

export const resumeExperience: ResumeExperience[] = [
  {
    role: "Software Engineer II (L2)",
    company: "AlphaSights",
    location: "New York, N.Y.",
    dateRange: "July 2024 - August 2026",
    bullets: [
      "Built and shipped full-stack, user-facing features for the Experts web platform using React, TypeScript, Kotlin, and Ruby on Rails, supporting expert discovery, vetting, and engagement workflows",
      "Designed and developed reusable and accessible React components within the Experts design system, powering complex expert-profile interactions",
      "Built an automated call recording and AI transcription workflow using Twilio API and AssemblyAI to surface transcripts directly in expert profiles, achieving 91% user adoption post-beta",
      "Architected and led the modernization of legacy location and language management, migrating language data to a new structured model and building a new interface to support expert locations and multilingual profiles",
    ],
  },
  {
    role: "Software Engineer I",
    company: "CoStar Group",
    location: "Washington, D.C.",
    dateRange: "July 2022 - July 2024",
    bullets: [
      "Developed full-stack micro-frontend applications and microservices across CoStar's product suite using React, TypeScript, GraphQL, and Node.js, supporting an internal web platform used by 1,000+ sales and finance employees",
      "Led platform-wide internationalization efforts to support multilingual experiences",
      "Modernized legacy applications and internal sales and finance workflows while maintaining SOX compliance",
      "Onboarded entry-level and associate engineers to the team's codebase, workflows, and development practices",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Cisco",
    location: "Research Triangle Park, N.C.",
    dateRange: "May 2021 - August 2021",
    bullets: [
      "Diagnosed and resolved CI/CD pipeline failures, improving deployment reliability and ensuring accurate collection and reporting of quality metrics across releases",
      "Built Java integration tests with Spring and Maven to generate and simulate hardware telemetry, enabling automated testing of hardware-dependent application workflows",
    ],
  },
];

export const resumeEducation: ResumeEducation = {
  school: "Virginia Tech",
  degree: "B.S. Business Information Technology, Computer Science Minor",
  location: "Blacksburg, V.A.",
  dateRange: "August 2018 - May 2022",
  details: [
    "GPA: 3.95/4.00, Highest Honors (Summa Cum Laude)",
    "Studies: Data Structures & Algorithms, Human-Computer Interaction, Mobile Software Development, Advanced Modeling for Business Analytics",
  ],
};

export const resumeLinks = [
  "kluu.dev",
  "linkedin.com/in/katelyn-luu",
  "github.com/kcluu",
];
