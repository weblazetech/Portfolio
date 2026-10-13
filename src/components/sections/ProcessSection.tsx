import React from 'react'
import { PROCESS_STAGES } from '../../data/projects'

export const ProcessSection: React.FC = () => {
  return (
    <section className="section" id="process">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="typo-eyebrow">
          DELIVERY PROCESS
        </div>

        <h2 className="typo-section-heading">
          From idea to production.
        </h2>

        <p className="typo-body" style={{ maxWidth: '850px' }}>
          We work across strategy, design, engineering and deployment — taking products from an initial requirement to a production-ready system.
        </p>

        <div className="process-grid" style={{ marginTop: '16px' }}>
          <div className="process-preview-box" style={{ padding: '16px', overflow: 'hidden' }}>
            <img
              src="/images/workflow-illustration.png"
              alt="From idea to production workflow illustration"
              style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '480px', display: 'block' }}
            />
          </div>

          <div className="stage-list">
            {PROCESS_STAGES.map(stage => (
              <div key={stage.number} className="stage-item">
                <div className="stage-header">
                  {stage.number} &nbsp; {stage.title}
                </div>
                <div className="stage-desc">
                  {stage.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
