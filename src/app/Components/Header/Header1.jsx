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
          {/* Left: Logo with Icon */}
          <div className="navbar-logo">
            <Link href="/" className="logo-link">
              <svg className="logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21L12 3L21 21H3Z" fill="#635BFF" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
            <Link href="/contact" className="contact-us-btn">
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
              <i className="bi bi-x-lg"></i>
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
