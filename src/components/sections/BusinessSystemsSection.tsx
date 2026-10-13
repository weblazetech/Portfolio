import React from 'react'
import { BUSINESS_SOFTWARE } from '../../data/projects'
import { ProjectCard } from '../portfolio/ProjectCard'

export const BusinessSystemsSection: React.FC = () => {
  return (
    <section className="section" id="business-systems">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="typo-eyebrow">
          BUSINESS SYSTEMS
        </div>

        <h2 className="typo-section-heading">
          Beyond websites.
        </h2>

        <p className="typo-body" style={{ maxWidth: '850px' }}>
          We also build software that powers the operations behind the scenes.
        </p>

        <div className="portfolio-grid-3" style={{ marginTop: '16px' }}>
          {BUSINESS_SOFTWARE.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
