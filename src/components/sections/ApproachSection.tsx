import React from 'react'
import { APPROACH_STEPS } from '../../data/projects'

export const ApproachSection: React.FC = () => {
  return (
    <section className="section" id="approach">
      <div className="container approach-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="typo-eyebrow">
            OUR APPROACH
          </div>

          <h2 className="typo-section-heading">
            Built with purpose.
          </h2>
        </div>

        <div className="approach-steps-box">
          {APPROACH_STEPS.map(step => (
            <div
              key={step.number}
              className={`approach-step-card ${step.highlighted ? 'highlighted' : ''}`}
            >
              <h3 className="typo-card-title">
                {step.number} &nbsp; {step.title}
              </h3>
              <p className="typo-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
