"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileToggle]);

  return (
    <>
      <header
        className={`propelus-navbar ${isSticky ? 'navbar-sticky' : ''} ${
          mobileToggle ? 'mobile-menu-open' : ''
        }`}
      >
        <div className="navbar-container">
          {/* Left: Logo */}
          <div className="navbar-logo">
            <Link href="/" className="logo-link">
              <span className="logo-text">PropelusAI</span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="navbar-nav">
            <Nav 
              setMobileToggle={setMobileToggle}
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              isMobile={false}
            />
          </nav>

          {/* Right: Contact Button */}
          <div className="navbar-actions">
            <Link href="/contact" className="theme-btn navbar-cta-btn">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${mobileToggle ? 'active' : ''}`}
            onClick={() => setMobileToggle(!mobileToggle)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileToggle ? 'active' : ''}`}
        onClick={() => setMobileToggle(false)}
      >
        <div
          className="mobile-menu-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <Link href="/" className="mobile-logo" onClick={() => setMobileToggle(false)}>
              PropelusAI
            </Link>
            <button
              className="mobile-menu-close"
              onClick={() => setMobileToggle(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="mobile-menu-body">
            <Nav 
              setMobileToggle={setMobileToggle}
              isMobile={true}
              servicesOpen={mobileServicesOpen}
              setServicesOpen={setMobileServicesOpen}
            />
            <div className="mobile-menu-footer">
              <Link
                href="/contact"
                className="theme-btn mobile-cta-btn"
                onClick={() => setMobileToggle(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
