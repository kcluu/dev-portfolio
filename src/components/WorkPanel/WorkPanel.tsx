import { careerHistory } from '../../data/career'
import { recentProject } from '../../data/projects'

import { TimelineItem } from '../TimelineItem/TimelineItem'
import { ProjectCard } from '../ProjectCard/ProjectCard'

import '../../styles/panel.css'
import './WorkPanel.css'

export const WorkPanel = () => {
  return (
    <section className="panel">
      <p className="eyebrow">selected work</p>

      <h1 className="heading">Where I've been, and what I've been building.</h1>

      <h2 className="section-label career">
        <span className="dot" />
        Career history
      </h2>

      <div className="timeline">
        {careerHistory.map((entry, index) => (
          <TimelineItem key={entry.company} entry={entry} isLast={index === careerHistory.length - 1} />
        ))}
      </div>

      <h2 className="section-label projects">
        <span className="dot" />
        Recent project
      </h2>

      <div className="projects">
        <ProjectCard project={recentProject} />
      </div>
    </section>
  )
}
