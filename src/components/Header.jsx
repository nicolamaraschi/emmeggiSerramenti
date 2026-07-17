import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const menuData = {
  INFISSI: [
    { label: 'Alluminio', slug: 'alluminio' },
    { label: 'Alluminio E Legno', slug: 'alluminio-e-legno' },
    { label: 'Serramenti In PVC', slug: 'serramenti-in-pvc' },
    { label: 'Verande', slug: 'verande' },
    { label: 'Facciate', slug: 'facciate' }
  ],
  PORTE: [
    { label: 'Porte Blindate', slug: 'porte-blindate' },
    { label: 'Porte Interne', slug: 'porte-interne' }
  ],
  PERSIANE: [
    { label: 'Alluminio', slug: 'persiane-alluminio' },
    { label: 'Persiane Blindate', slug: 'persiane-blindate' }
  ],
  COMPLEMENTARI: [
    { label: 'Inferriate', slug: 'inferriate' },
    { label: 'Zanzariere', slug: 'zanzariere' },
    { label: 'Tende Da Sole', slug: 'tende-da-sole' },
    { label: 'Tapparelle', slug: 'tapparelle' }
  ]
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If we are NOT on the homepage, the header should probably always have a solid background
      // so we don't have transparency issues over text. We'll handle this in CSS or conditionally.
      if (window.scrollY > 50 || location.pathname !== '/') {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run on mount and when location changes
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileCategory = (category) => {
    if (activeMobileCategory === category) {
      setActiveMobileCategory(null);
    } else {
      setActiveMobileCategory(category);
    }
  };

  const isHomepage = location.pathname === '/';

  return (
    <>
      <header className={`glass-header ${!isScrolled && isHomepage ? 'transparent' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo-container">
            <img src="/logo-emmegi.png" alt="Emmegi Serramenti Logo" className="logo-img" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="nav-links desktop-only">
            {Object.entries(menuData).map(([category, items]) => (
              <div 
                key={category} 
                className="nav-item-wrapper"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-link" style={{cursor: 'default'}}>
                  {category}
                </span>
                
                <div className={`dropdown-menu ${activeDropdown === category ? 'active' : ''}`}>
                  {items.map((item, index) => (
                    <Link key={index} to={`/${category.toLowerCase()}/${item.slug}`} className="dropdown-item">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-toggle mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <aside className={`mobile-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo-emmegi.png" alt="Emmegi Serramenti" className="mobile-logo" />
          </Link>
        </div>
        <nav className="mobile-nav">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="mobile-category">
              <div 
                className={`mobile-category-header ${activeMobileCategory === category ? 'active' : ''}`}
                onClick={() => toggleMobileCategory(category)}
              >
                {category}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMobileCategory === category ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className={`mobile-sub-menu ${activeMobileCategory === category ? 'open' : ''}`}>
                {items.map((item, index) => (
                  <Link key={index} to={`/${category.toLowerCase()}/${item.slug}`} className="mobile-sub-item" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/" className="mobile-contact-btn" onClick={() => setIsMobileMenuOpen(false)}>Richiedi Preventivo</Link>
        </nav>
      </aside>
    </>
  );
}
