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
          <div className="breadcrumb">
            <Link to="/">EmmeGI</Link> <span className="separator">&gt;</span> <span className="current">{data.title}</span>
          </div>
          <h1 className="page-title">{data.title}</h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container category-layout">
        
        {/* Sidebar */}
        <aside className="category-sidebar">
          {data.sidebar.map((section, index) => (
            <div key={index} className="sidebar-section">
              <button 
                className={`sidebar-toggle ${openSidebarSections[index] !== false ? 'open' : ''}`}
                onClick={() => toggleSection(index)}
              >
                <span className="toggle-icon">{openSidebarSections[index] !== false ? '-' : '+'}</span>
                {section.title}
              </button>
              
              <div className={`sidebar-items ${openSidebarSections[index] !== false ? 'open' : ''}`}>
                {section.items.length > 0 ? (
                  section.items.map((item, idx) => (
                    <div key={idx} className="sidebar-item">{item}</div>
                  ))
                ) : (
                  <div className="sidebar-item empty">Nessun prodotto inserito</div>
                )}
              </div>
            </div>
          ))}
        </aside>

        {/* Content Area */}
        <main className="category-content">
          <div className="category-image-container">
            <img src={data.image} alt={data.headline} className="category-image" />
          </div>
          
          <div className="category-text-content">
            <h2 className="content-headline">{data.headline}</h2>
            <h3 className="content-subtitle">{data.subtitle}</h3>
            
            <div className="content-description">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
