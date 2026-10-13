import React from 'react'
import { CLIENT_WEBSITES } from '../../data/projects'
import { ProjectCard } from '../portfolio/ProjectCard'

export const SelectedWorkSection: React.FC = () => {
  return (
    <section className="section" id="selected-work">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="typo-eyebrow">
          SELECTED WORK
        </div>

        <h2 className="typo-section-heading">
          Built for real businesses.
        </h2>

        <p className="typo-body" style={{ maxWidth: '850px' }}>
          From customer-facing websites to internal business systems, we design and build digital products around the way businesses actually operate.
        </p>

        <div className="portfolio-grid-2" style={{ marginTop: '16px' }}>
          {CLIENT_WEBSITES.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
