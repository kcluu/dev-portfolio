import type { Project } from "../../data/projects";

import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project">
      <div className="project-head">
        <h3>{project.name}</h3>
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          View project ↗
        </a>
      </div>

      <p>{project.description}</p>

      <div className="tagrow">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {project.previewGif && (
        <div className="project-preview">
          <div className="project-preview-inner">
            {project.demoHref ? (
              <a
                className="project-preview-link"
                href={project.demoHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.previewGif} alt={`${project.name} preview`} />
                <span className="project-preview-hint">Visit live site ↗</span>
              </a>
            ) : (
              <img src={project.previewGif} alt={`${project.name} preview`} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
