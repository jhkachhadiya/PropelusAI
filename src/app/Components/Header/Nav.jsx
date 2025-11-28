import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import servicesData from '../../Data/services1.json';

const servicesItems = servicesData;

export default function Nav({ setMobileToggle, isMobile = false, servicesOpen, setServicesOpen }) {
  const handleLinkClick = () => {
    if (setMobileToggle) {
      setMobileToggle(false);
    }
  };

  if (isMobile) {
    return (
      <ul className="mobile-nav-list">
        <li className="mobile-nav-item">
          <button
            className={`mobile-nav-link ${servicesOpen ? 'active' : ''}`}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services
            <svg
              className={`mobile-nav-chevron ${servicesOpen ? 'open' : ''}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className={`mobile-nav-submenu ${servicesOpen ? 'open' : ''}`}>
            {servicesItems.map((item, index) => (
              <li key={index} className="mobile-nav-subitem">
                <Link
                  href={item.href}
                  className="mobile-nav-sublink"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mobile-nav-item">
          <Link href="/solutions" className="mobile-nav-link" onClick={handleLinkClick}>
            Solutions
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link href="/resources" className="mobile-nav-link" onClick={handleLinkClick}>
            Resources
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link href="/pricing" className="mobile-nav-link" onClick={handleLinkClick}>
            Pricing
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="navbar-nav-list">
      <li
        className="navbar-nav-item has-megamenu"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <Link href="/service" className="navbar-nav-link">
          Services
          <svg
            className={`nav-chevron ${servicesOpen ? 'open' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <div className={`navbar-megamenu ${servicesOpen ? 'open' : ''}`}>
          <div className="megamenu-content">
            <div className="megamenu-grid">
              {servicesItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="megamenu-item"
                >
                  <div className="megamenu-item-icon">
                    <div className={`megamenu-icon-box icon-box-${item.iconColor}`}>
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={24} 
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="megamenu-item-content">
                    <span className="megamenu-item-title">{item.title}</span>
                    <span className="megamenu-item-desc">{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </li>
      <li className="navbar-nav-item">
        <Link href="/solutions" className="navbar-nav-link">
          Solutions
        </Link>
      </li>
      <li className="navbar-nav-item">
        <Link href="/resources" className="navbar-nav-link">
          Resources
        </Link>
      </li>
      <li className="navbar-nav-item">
        <Link href="/pricing" className="navbar-nav-link">
          Pricing
        </Link>
      </li>
    </ul>
  );
}
