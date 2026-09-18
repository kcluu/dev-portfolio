import type { Project } from '../../data/projects'

import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project">
      <div className="project-head">
        <h3>{project.name}</h3>
        <a href={project.href}>View project ↗</a>
      </div>

      <p>{project.description}</p>

      <div className="tagrow">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
