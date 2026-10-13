import React from 'react'

export const CtaSection: React.FC = () => {
  return (
    <section className="section cta-section" id="contact">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '28px' }}>
        <div className="typo-eyebrow">
          HAVE A PROJECT IN MIND?
        </div>

        <h2 className="typo-section-heading" style={{ maxWidth: '700px' }}>
          Let’s build something that works.
        </h2>

        <p className="typo-body" style={{ maxWidth: '650px' }}>
          Tell us what you’re building. We’ll help turn the idea into a reliable digital product.
        </p>

        <div>
          <a
            href="https://weblaze.in/pages/contact.php"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
