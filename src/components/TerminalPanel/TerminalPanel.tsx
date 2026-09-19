import {
  resumeEducation,
  resumeExperience,
  resumeHeader,
  resumeLinks,
  resumeSkills,
  resumeSummary,
} from "../../data/resume";

import "./TerminalPanel.css";

export const TerminalPanel = () => {
  return (
    <div className="terminal-panel">
      <div className="terminal-line">
        <span className="terminal-prompt">$</span> whoami
      </div>
      <div className="terminal-output">
        {resumeHeader.name.toLowerCase().replace(" ", "-")}
      </div>

      <div className="terminal-line">
        <span className="terminal-prompt">$</span> cat resume.txt
      </div>

      <div className="terminal-output resume-doc">
        <header className="resume-header">
          <h1 className="resume-name">{resumeHeader.name}</h1>
          <p className="resume-title">{resumeHeader.title}</p>
          <p className="resume-contact">
            {resumeHeader.location} <span className="resume-dot">|</span>{" "}
            {resumeHeader.email}
          </p>
        </header>

        <p className="resume-comment"># {resumeSummary}</p>

        <section className="resume-section">
          <h2 className="resume-heading">
            <span className="resume-heading-mark">##</span> skills
          </h2>

          <dl className="resume-skills">
            {resumeSkills.map((group) => (
              <div className="resume-skill-row" key={group.label}>
                <dt className="resume-skill-key">{group.label}:</dt>
                <dd className="resume-skill-value">
                  {group.items.map((item, index) => (
                    <span key={item}>
                      <span className="resume-skill-item">{item}</span>
                      {index < group.items.length - 1 && (
                        <span className="resume-skill-sep">, </span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-section">
          <h2 className="resume-heading">
            <span className="resume-heading-mark">##</span> experience
          </h2>

          {resumeExperience.map((job) => (
            <article className="resume-job" key={`${job.company}-${job.role}`}>
              <div className="resume-job-head">
                <span className="resume-job-role">{job.role}</span>
                <span className="resume-job-at"> @ </span>
                <span className="resume-job-company">{job.company}</span>
              </div>
              <p className="resume-job-meta">
                {job.location} <span className="resume-dot">|</span>{" "}
                {job.dateRange}
              </p>

              <ul className="resume-bullets">
                {job.bullets.map((bullet) => (
                  <li className="resume-bullet" key={bullet.slice(0, 40)}>
                    <span className="resume-bullet-mark">▸</span> {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-heading">
            <span className="resume-heading-mark">##</span> education
          </h2>

          <article className="resume-job">
            <div className="resume-job-head">
              <span className="resume-job-role">{resumeEducation.degree}</span>
            </div>
            <p className="resume-job-meta">
              <span className="resume-job-company">
                {resumeEducation.school}
              </span>{" "}
              <span className="resume-dot">|</span> {resumeEducation.location}{" "}
              <span className="resume-dot">|</span> {resumeEducation.dateRange}
            </p>

            <ul className="resume-bullets">
              {resumeEducation.details.map((detail) => (
                <li className="resume-bullet" key={detail.slice(0, 40)}>
                  <span className="resume-bullet-mark">▸</span> {detail}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <p className="resume-links">
          {resumeLinks.map((link, index) => (
            <span key={link}>
              <span className="resume-link">{link}</span>
              {index < resumeLinks.length - 1 && (
                <span className="resume-dot"> | </span>
              )}
            </span>
          ))}
        </p>
      </div>

      <div className="terminal-line">
        <span className="terminal-prompt">$</span>
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
    </div>
  );
};
