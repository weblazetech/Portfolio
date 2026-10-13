import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <section className="section hero-section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '28px' }}>
        <div className="typo-eyebrow">
          OUR WORK
        </div>

        <h1 className="typo-display hero-title">
          Software we’ve built. Products that work.
        </h1>

        <p className="typo-body hero-intro">
          A selection of websites, digital products and business systems designed and developed by WebBlaze.
        </p>

        <div className="hero-actions">
          <a
            href="https://weblaze.in/pages/contact.php"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Start a Project
          </a>
          <a
            href="https://weblaze.in/pages/services.php"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
