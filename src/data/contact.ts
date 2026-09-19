export type ContactMethodId = "email" | "website" | "github" | "linkedin";

export interface ContactMethod {
  id: ContactMethodId;
  label: string;
  href: string;
  external?: boolean;
}

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "kcluu16@gmail.com",
    href: "mailto:kcluu16@gmail.com",
  },
  {
    id: "linkedin",
    label: "linkedin.com/in/katelyn-luu",
    href: "#",
    external: true,
  },
  {
    id: "github",
    label: "github.com/kcluu",
    href: "#",
    external: true,
  },
  {
    id: "website",
    label: "katelynluu.com",
    href: "https://katelynluu.com",
    external: true,
  },
];
