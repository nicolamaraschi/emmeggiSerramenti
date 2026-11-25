import React, { useState, useEffect, useRef } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(() => {
    return typeof window !== 'undefined' && window.location.search.includes('menu=open');
  });
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

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

    handleScroll();

    if (prevPathRef.current !== location.pathname) {
      setIsMobileMenuOpen(false);
      prevPathRef.current = location.pathname;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Lock body scroll and mark state when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
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
            <Link to="/" className="nav-link">
              HOME
            </Link>
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

            <Link to="/#contatti" className="nav-link">
              CONTATTI
            </Link>

            <Link to="/preventivo" className="nav-link" style={{ color: 'var(--accent-brand)' }}>
              PREVENTIVO
            </Link>
            
            {/* Direct Call Button in Header */}
            <a href="tel:+390245708405" className="header-phone-btn" title="Chiama subito 02 45708405">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="header-phone-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="header-phone-number">02 45708405</span>
            </a>
          </nav>

          {/* Mobile Right Controls: Call Button + Hamburger */}
          <div className="mobile-header-actions mobile-only">
            <a href="tel:+390245708405" className="mobile-header-call-pill" aria-label="Chiama subito 02 45708405" title="Chiama subito">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="mobile-phone-text">02 45708405</span>
            </a>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div 
        className={`mobile-sidebar-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      ></div>
      <aside className={`mobile-sidebar ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Menu navigazione mobile">
        <div className="mobile-sidebar-header">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo-emmegi.png" alt="Emmegi Serramenti" className="mobile-logo" />
          </Link>
          <button 
            className="mobile-sidebar-close" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Chiudi menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="mobile-nav">
          <div className="mobile-category">
            <Link
              to="/"
              className="mobile-category-header"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>HOME</span>
            </Link>
          </div>
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="mobile-category">
              <button 
                type="button"
                className={`mobile-category-header ${activeMobileCategory === category ? 'active' : ''}`}
                onClick={() => toggleMobileCategory(category)}
                aria-expanded={activeMobileCategory === category}
              >
                <span>{category}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMobileCategory === category ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className={`mobile-sub-menu ${activeMobileCategory === category ? 'open' : ''}`}>
                {items.map((item, index) => (
                  <Link key={index} to={`/${category.toLowerCase()}/${item.slug}`} className="mobile-sub-item" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="mobile-category">
            <Link
              to="/#contatti"
              className="mobile-category-header"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>CONTATTI</span>
            </Link>
          </div>
        </nav>

        {/* Clean Footer Actions inside drawer */}
        <div className="mobile-sidebar-footer">
          <a href="tel:+390245708405" className="mobile-drawer-call-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Chiama: <strong>02 45708405</strong></span>
          </a>
          <Link to="/preventivo" className="mobile-drawer-quote-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Richiedi Preventivo
          </Link>
        </div>
      </aside>
    </>
  );
}
