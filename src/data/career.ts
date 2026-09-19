export interface CareerEntry {
  role: string;
  company: string;
  dateRange: string;
  description: string;
}

export const careerHistory: CareerEntry[] = [
  {
    role: "Software Engineer II (L2)",
    company: "AlphaSights",
    dateRange: "July 2024 - August 2026",

    description:
      "Developed full-stack features for the Experts web platform, including an AI call transcription workflow, and led the modernization of the platform's location and language architecture to support multilingual expert profiles.",
  },

  {
    role: "Software Engineer I",
    company: "CoStar Group",
    dateRange: "July 2022 - July 2024",

    description:
      "Developed full-stack micro-frontend applications and microservices across CoStar's product suite supporting an internal web platform, and mentored new engineers by leading the internship program and onboarding process.",
  },

  {
    role: "Software Engineer Intern",
    company: "Cisco",
    dateRange: "May 2021 - August 2021",

    description:
      "Diagnosed CI/CD pipeline failures and built Java integration tests to simulate hardware telemetry, strengthening the reliability of automated testing for hardware-dependent workflows.",
  },
];
