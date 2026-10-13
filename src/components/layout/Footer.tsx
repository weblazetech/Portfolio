import React from 'react'
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICES_LINKS,
  FOOTER_LEGAL_LINKS,
  COMPANY_INFO
} from '../../data/navigation'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Company summary */}
          <div className="footer-company-details">
            <a href="https://weblaze.in/" className="footer-logo">
              <img src="/images/webblaze-logo.png" alt="WebBlaze Technologies" />
            </a>
            <p className="footer-text" style={{ fontWeight: 600, color: 'var(--ink)' }}>
              {COMPANY_INFO.name}
            </p>
            <p className="footer-text">
              {COMPANY_INFO.cin}
            </p>
            <p className="footer-text">
              {COMPANY_INFO.description}
            </p>
            <p className="footer-text">
              {COMPANY_INFO.phones.join(' · ')}
            </p>
            <p className="footer-text">
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--ink)', fontWeight: 500 }}>
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-link-list">
              {FOOTER_COMPANY_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="footer-link"
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="footer-column-title">Services</h4>
            <ul className="footer-link-list">
              {FOOTER_SERVICES_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="footer-link"
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="footer-column-title">Offices</h4>
            <div className="footer-office-item">
              <div className="footer-office-title">Corporate Office</div>
              <p className="footer-text">{COMPANY_INFO.corporateOffice}</p>
            </div>
            <div className="footer-office-item">
              <div className="footer-office-title">Registered Office</div>
              <p className="footer-text">{COMPANY_INFO.registeredOffice}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>{COMPANY_INFO.copyright}</div>
          <div className="footer-legal-links">
            {FOOTER_LEGAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="footer-link"
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
