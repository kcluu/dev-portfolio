import { careerHistory } from "../../data/career";
import { featuredProjects } from "../../data/projects";

import { TimelineItem } from "../TimelineItem/TimelineItem";
import { ProjectCard } from "../ProjectCard/ProjectCard";

import "../../styles/panel.css";
import "./WorkPanel.css";

export const WorkPanel = () => {
  return (
    <section className="panel">
      <p className="eyebrow">My Experience</p>

      <h1 className="heading">
        Where I've been, and what I've built on the side.
      </h1>

      <div className="timeline">
        {careerHistory.map((entry, index) => (
          <TimelineItem
            key={entry.company}
            entry={entry}
            isLast={index === careerHistory.length - 1}
          />
        ))}
      </div>

      <div className="projects">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
