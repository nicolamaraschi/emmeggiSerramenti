import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import './CategoryPage.css';

// Technical cutaways / diagrams on white background that must not be cropped
const CONTAIN_IMAGES = new Set([
  '/profili/aluk-c67k.jpg',
  '/profili/aluk-infineo-c67km.jpg',
  '/profili/aluk-c77k-profilo.jpg',
  '/profili/aluk-c77k-cs.jpg',
  '/profili/aluk-sc156-hi.jpg',
  '/profili/aluk-s140.jpg',
  '/profili/aluk-45v.jpg',
  '/profili/aluk-bsf70.jpg',
  '/profili/aluk-persiane-45p.jpg',
  '/profili/aluk-persiane-scorrevole.jpg',
  '/profili/fossati-portoncini.jpg',
  '/profili/plasticino-guide.jpg',
  '/immagineProdottolsomfy.webp',
]);

export default function CategoryPage() {
  const { slug } = useParams();
  
  // Find the product data based on the slug.
  const data = productsData[slug];
  
  // State for sidebar accordions & selected profile detail
  const [openSidebarSections, setOpenSidebarSections] = useState({});
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    setSelectedProfile(null);
  }, [slug]);

  const toggleSection = (index) => {
    setOpenSidebarSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const activeProfileData =
    selectedProfile && data?.profileDetails?.[selectedProfile]
      ? data.profileDetails[selectedProfile]
      : null;

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
                      <div className="flex items-center gap-2.5 py-1.5 text-sm font-medium text-neutral-700">
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
                      {section.items.map((item, idx) => {
                        const hasDetail = Boolean(data.profileDetails?.[item]);
                        const isSelected = selectedProfile === item;
                        if (hasDetail) {
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedProfile(isSelected ? null : item)}
                              className={`sidebar-item sidebar-item-btn ${isSelected ? 'active' : ''}`}
                            >
                              <span>{item}</span>
                              <span className="sidebar-item-arrow" aria-hidden="true">→</span>
                            </button>
                          );
                        }
                        return (
                          <div key={idx} className="sidebar-item">{item}</div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        )}

        {/* Content Area: Image + Text Side-by-Side (or Selected Profile Detail) */}
        <main className="category-content">
          <div className="flex flex-col gap-5">
            <div className="category-image-container">
              {(() => {
                const imgSrc = activeProfileData?.image || data.image;
                const isContain = activeProfileData && CONTAIN_IMAGES.has(imgSrc);
                return (
                  <img
                    src={imgSrc}
                    alt={activeProfileData ? activeProfileData.name : data.headline}
                    className={isContain ? 'category-image category-image-profile' : 'category-image'}
                  />
                );
              })()}
              <div className="image-caption">
                {activeProfileData ? `${activeProfileData.brand} — ${activeProfileData.name}` : data.title}
              </div>
            </div>

            {activeProfileData?.profileImage && (
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-neutral-200 bg-[#f6f5f2] px-4 py-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                    {activeProfileData.profileImageLabel || 'Sezione / Dettaglio Profilo'}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">
                    {activeProfileData.name}
                  </span>
                </div>
                <div className="flex h-64 items-center justify-center bg-white p-4">
                  <img
                    src={activeProfileData.profileImage}
                    alt={`Dettaglio profilo ${activeProfileData.name}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="category-text-content">
            {activeProfileData ? (
              <>
                <button
                  type="button"
                  onClick={() => setSelectedProfile(null)}
                  className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:text-brand"
                >
                  ← Torna a {data.title}
                </button>
                <div className="text-header-group">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {activeProfileData.brand}
                  </span>
                  <h2 className="content-headline">{activeProfileData.name}</h2>
                  {activeProfileData.note && (
                    <h3 className="content-subtitle">{activeProfileData.note}</h3>
                  )}
                </div>

                <div className="content-description">
                  <p>{activeProfileData.description}</p>
                </div>

                {activeProfileData.specs && activeProfileData.specs.length > 0 && (
                  <dl className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-[#f6f5f2] px-5 py-2">
                    {activeProfileData.specs.map((spec) => (
                      <div key={spec.label} className="py-3.5">
                        <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-neutral-900">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </>
            ) : (
              <>
                <div className="text-header-group">
                  <h2 className="content-headline">{data.headline}</h2>
                  {data.subtitle && <h3 className="content-subtitle">{data.subtitle}</h3>}
                </div>
                
                <div className="content-description">
                  {data.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </>
            )}

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
