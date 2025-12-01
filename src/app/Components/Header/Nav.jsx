import Link from 'next/link';
import { useRef, useEffect } from 'react';
import servicesData from '../../Data/services1.json';

const servicesItems = servicesData;

export default function Nav({ setMobileToggle, isMobile = false, servicesOpen, setServicesOpen }) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLinkClick = () => {
    if (setMobileToggle) {
      setMobileToggle(false);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
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
            <i className={`bi bi-chevron-down mobile-nav-chevron ${servicesOpen ? 'open' : ''}`}></i>
          </button>
          <ul className={`mobile-nav-submenu ${servicesOpen ? 'open' : ''}`}>
            {servicesItems.map((item, index) => (
              <li key={index} className="mobile-nav-subitem">
                <Link
                  href={item.href || "/service"}
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
        <li className="mobile-nav-item">
          <Link href="/demo" className="mobile-nav-link" onClick={handleLinkClick}>
            Demo
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="navbar-nav-list">
      <li 
        className="navbar-nav-item has-megamenu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/service" className="navbar-nav-link">
          Services
          <i className={`bi bi-chevron-down nav-chevron ${servicesOpen ? 'open' : ''}`}></i>
        </Link>
        <div 
          className={`navbar-megamenu ${servicesOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="megamenu-content">
            <div className="megamenu-grid">
              {servicesItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href || "/service"}
                  className="megamenu-item"
                >
                  <div className="megamenu-item-icon">
                    <div className={`megamenu-icon-box icon-box-${item.iconColor}`}>
                      <i className={`bi ${item.icon}`} style={{fontSize: '24px'}}></i>
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
      <li className="navbar-nav-item">
        <Link href="/demo" className="navbar-nav-link">
          Demo
        </Link>
      </li>
    </ul>
  );
}
