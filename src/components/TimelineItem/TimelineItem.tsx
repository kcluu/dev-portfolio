import type { CareerEntry } from '../../data/career'

import './TimelineItem.css'

interface TimelineItemProps {
  entry: CareerEntry
  isLast: boolean
}

export const TimelineItem = ({ entry, isLast }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <span className="dot" />
        {!isLast && <span className="line" />}
      </div>

      <div className="timeline-content">
        <div className="timeline-head">
          <h3>{entry.role}</h3>
          <span className="timeline-date">{entry.dateRange}</span>
        </div>

        <p className="timeline-company">{entry.company}</p>

        <p>{entry.description}</p>
      </div>
    </div>
  )
}
