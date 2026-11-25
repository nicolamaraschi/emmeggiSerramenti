import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import './CategoryPage.css';

export default function CategoryPage() {
  const { slug } = useParams();
  
  // Find the product data based on the slug.
  const data = productsData[slug];
  
  // State for sidebar accordions
  const [openSidebarSections, setOpenSidebarSections] = useState({});

  const toggleSection = (index) => {
    setOpenSidebarSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!data) {
    return (
      <div className="page-container not-found">
        <div className="container">
          <h2>Categoria non trovata o in allestimento</h2>
          <Link to="/" className="cta-button">Torna alla Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Page Header (Breadcrumb and Title) */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">EmmeGI</Link>
            {data.category && (
              <>
                <span className="separator">&gt;</span>
                <span className="category-parent">{data.category}</span>
              </>
            )}
            <span className="separator">&gt;</span>
            <span className="current">{data.title}</span>
          </nav>
          <h1 className="page-title">{data.title}</h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={`container category-layout ${(!data.sidebar || data.sidebar.length === 0) ? 'no-sidebar' : ''}`}>
        
        {/* Sidebar */}
        {data.sidebar && data.sidebar.length > 0 && (
          <aside className="category-sidebar">
            <div className="sidebar-inner">
              <div className="sidebar-header-label">Collezioni &amp; Serie</div>
              {data.sidebar.map((section, index) => {
                const hasItems = section.items && section.items.length > 0;
                const isOpen = openSidebarSections[index] !== false;

                if (!hasItems) {
                  return (
                    <div key={index} className="sidebar-section">
                      <div className="flex items-center gap-2.5 py-1.5 text-sm font-medium text-neutral-300">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                        <span>{section.title}</span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={index} className="sidebar-section">
                    <button 
                      type="button"
                      className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
                      onClick={() => toggleSection(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="sidebar-title">{section.title}</span>
                      <span className="toggle-icon">
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`chevron ${isOpen ? 'open' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    
                    <div className={`sidebar-items ${isOpen ? 'open' : ''}`}>
                      {section.items.map((item, idx) => (
                        <div key={idx} className="sidebar-item">{item}</div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        )}

        {/* Content Area: Image + Text Side-by-Side */}
        <main className="category-content">
          <div className="category-image-container">
            <img src={data.image} alt={data.headline} className="category-image" />
            <div className="image-caption">{data.title}</div>
          </div>
          
          <div className="category-text-content">
            <div className="text-header-group">
              <h2 className="content-headline">{data.headline}</h2>
              {data.subtitle && <h3 className="content-subtitle">{data.subtitle}</h3>}
            </div>
            
            <div className="content-description">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="content-cta-group">
              <a href="tel:+390245708405" className="cta-call-btn" title="Chiama subito per questo prodotto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Chiama: <strong>02 45708405</strong></span>
              </a>
              <Link to={`/preventivo?prodotto=${slug}`} className="cta-button primary">Richiedi Preventivo</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
