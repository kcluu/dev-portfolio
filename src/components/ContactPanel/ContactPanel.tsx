import { CopyEmailButton } from "../CopyEmailButton/CopyEmailButton";

import { contactMethods } from "../../data/contact";

import "../../styles/panel.css";
import "./ContactPanel.css";

const EMAIL = "kcluu16@gmail.com";

const CONTACT_ICONS = {
  email: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    >
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.4" />
      <path d="M2 4.5l6 4.5 6-4.5" />
    </svg>
  ),
  website: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <circle cx="8" cy="8" r="2.2" />
      <path d="M5.2 3.8l1.1 1.2h3.4l1.1-1.2" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
    >
      <path d="M8 1a7 7 0 1 0 2.2 13.6c-.3-.6-.2-1.5-.2-2.2 0 0-.5.1-1 .1-1.4 0-1.9-1-2-1.4-.1-.3-.5-1-.9-1.2 0 0-1.3 0-.1-.5.9-.4 1.4.6 1.5.8.6 1 1.5.7 1.9.5.1-.5.4-.8.6-1-2.1-.2-3.2-1.3-3.2-2.9 0-.6.2-1.2.6-1.6-.1-.3-.3-1 .1-2 0 0 1 0 1.9.9.5-.2 1.1-.2 1.7-.2s1.2 0 1.7.2c.9-.9 1.9-.9 1.9-.9.4 1 .2 1.7.1 2 .4.4.6 1 .6 1.6 0 1.6-1.1 2.7-3.2 2.9.4.3.7.9.7 1.7v2.3A7 7 0 0 0 8 1z" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    >
      <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
      <path d="M4.5 6.5v5M4.5 4.7v.1M8 11.5v-3c0-1.2.7-1.9 1.7-1.9 1 0 1.8.7 1.8 1.9v3" />
    </svg>
  ),
} as const;

export const ContactPanel = () => {
  return (
    <section className="panel">
      <p className="eyebrow">Say Hello</p>

      <h1 className="heading">Let's build something together.</h1>

      <p className="lede">
        I'm always happy to chat about new roles or opportunities. The fastest
        way to reach me is email.
      </p>

      <div className="contact-links">
        {contactMethods.map((method) => {
          const isExternal = method.external ?? false;

          return (
            <a
              key={method.id}
              href={method.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {CONTACT_ICONS[method.id]}
              {method.label}
            </a>
          );
        })}
      </div>

      <CopyEmailButton email={EMAIL} />
    </section>
  );
};
