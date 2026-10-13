import React, { useState, useRef, useEffect } from 'react'
import { NAV_LINKS, NAV_CTA } from '../../data/navigation'

export const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Primary mobile links: Home, About, Services
  const primaryMobileLinks = NAV_LINKS.slice(0, 3)
  // Dropdown items: Solutions, Industries, Blog, Careers, Programs
  const dropdownMobileLinks = NAV_LINKS.slice(3)

  // Close dropdown when tapping / clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dropdownOpen])

  return (
    <header className="navbar">
      {/* Desktop & Tablet Navigation (Unmodified) */}
      <div className="navbar-inner">
        <a href="https://weblaze.in/" className="navbar-logo" aria-label="WebBlaze Home">
          <img src="/images/webblaze-logo.png" alt="WebBlaze Technologies" />
        </a>

        <nav className="navbar-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="nav-link"
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={NAV_CTA.href}
            className="btn btn-nav"
            target={NAV_CTA.isExternal ? '_blank' : undefined}
            rel={NAV_CTA.isExternal ? 'noopener noreferrer' : undefined}
          >
            {NAV_CTA.label}
          </a>
        </nav>
      </div>

      {/* Phone / Mobile Navigation (Mobile breakpoint only) */}
      <div className="navbar-mobile">
        {/* Top: WebBlaze Logo */}
        <div className="mobile-logo-container">
          <a href="https://weblaze.in/" className="navbar-logo" aria-label="WebBlaze Home">
            <img src="/images/webblaze-logo.png" alt="WebBlaze Technologies" />
          </a>
        </div>

        {/* Middle: Home, About, Services + More Dropdown */}
        <nav className="mobile-links-row" aria-label="Mobile navigation">
          {primaryMobileLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="mobile-nav-link"
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}

          {/* Small downward arrow (▼) opening dropdown menu */}
          <div className="mobile-dropdown-wrapper" ref={dropdownRef}>
            <button
              id="mobile-dropdown-btn"
              type="button"
              className={`mobile-dropdown-btn ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-dropdown-menu"
              aria-haspopup="true"
              aria-label="Open navigation menu"
            >
              <svg
                className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                id="mobile-dropdown-menu"
                className="mobile-dropdown-menu"
                role="menu"
                aria-labelledby="mobile-dropdown-btn"
              >
                {dropdownMobileLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="mobile-dropdown-item"
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Bottom: Perfectly Centered "Get in Touch" Button */}
        <div className="mobile-cta-container">
          <a
            href={NAV_CTA.href}
            className="btn btn-nav mobile-cta-btn"
            target={NAV_CTA.isExternal ? '_blank' : undefined}
            rel={NAV_CTA.isExternal ? 'noopener noreferrer' : undefined}
          >
            {NAV_CTA.label}
          </a>
        </div>
      </div>
    </header>
  )
}
