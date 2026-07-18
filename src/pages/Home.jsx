import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Home() {
  return (
    <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-subtitle">Eccellenza Italiana</h2>
            <h1 className="hero-title">L'arte di abitare la luce.</h1>
            <p className="hero-description">
              L’amore di fare le cose per bene, dal 1990. Serramenti di lusso progettati per fondere estetica, innovazione tecnologica e materiali pregiati.
            </p>
            <a href="#preventivo" className="cta-button">Scopri le Collezioni</a>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Eccellenza senza intermediari</h2>
              <p className="section-subtitle">Serramenti completi in tutto</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  {/* Factory Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>
                </div>
                <h3>Dalla Fabbrica a Te</h3>
                <p>Qualità e risparmio diretti. Realizziamo serramenti finiti direttamente dal profilo, garantendo la massima collaborazione e un risultato eccellente senza costi di intermediazione.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  {/* Shield Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                </div>
                <h3>Materiali d'Avanguardia</h3>
                <p>Fieri partner dell'Aluk Group. Utilizziamo profili top di gamma e tutti i nostri infissi sono rigorosamente marcati CE, sinonimo di assoluta sicurezza e prestigio.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  {/* Award Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <h3>Garanzia Totale</h3>
                <p>Massima resistenza agli eventi atmosferici, antintrusione e antisfondamento. Il nostro lavoro è supportato da un'eccellente assistenza post-vendita per riparazioni e ricambi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services-section">
          <div className="container">
            <div className="services-grid">
              <div className="service-content">
                <h2 className="section-title">Progettazione su Misura</h2>
                <p>La progettazione avviene tramite moderni software dedicati, gestiti dal nostro personale tecnico qualificato. Traduciamo le più svariate richieste in soluzioni estetiche e funzionali impeccabili.</p>
                <p>Ogni serramento viene realizzato e curato nei minimi dettagli secondo le vostre indicazioni, i vostri gusti e le specifiche esigenze abitative. Il vantaggio di progettare internamente garantisce un controllo qualità assoluto.</p>
              </div>
              <div className="service-image-container">
                <img src="/progettazione-su-misura.webp" alt="Progettazione su Misura Serramenti" className="service-image" />
              </div>
            </div>
            
            <div className="services-grid reverse">
              <div className="service-content">
                <h2 className="section-title">Montaggio Qualificato Interno</h2>
                <p>Nessuna ditta esterna o terze persone. Ogni serramento che esce dalla nostra azienda viene installato in modo sartoriale dal nostro personale interno altamente qualificato.</p>
                <p>Operiamo prevalentemente a Buccinasco, Corsico, Assago, Cesano Boscone, Rozzano, Locate Triulzi, Opera, Pieve Emanuele, Settimo Milanese, Trezzano sul Naviglio, Gaggiano, Baggio e tutta la zona di Milano Sud.</p>
              </div>
              <div className="service-image-container">
                <img src="/montaggio-interno.webp" alt="Montaggio Qualificato Interno Serramenti" className="service-image" />
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE/AFTER SECTION */}
        <section className="before-after-section" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-color)' }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">I Nostri Lavori: Il Prima e il Dopo</h2>
              <p className="section-subtitle">Scorri il cursore per vedere la differenza che un serramento di lusso può fare</p>
            </div>
            
            <div className="before-after-grid">
              <BeforeAfterSlider beforeImage="/prima1a.png" afterImage="/dopo1b.png" />
              <BeforeAfterSlider beforeImage="/prima2a.png" afterImage="/dopo2b.png" />
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-final-section" id="preventivo">
          <div className="container cta-container">
            <div className="quote-box">
              <p className="quote-text">"L’unico modo di fare un ottimo lavoro è amare quello che fai."</p>
              <p className="quote-author">- Steve Jobs</p>
            </div>
            <h2 className="cta-title">Non costa nulla, solo una stretta di mano.</h2>
            <p className="cta-subtitle">Per un preventivo gratuito e personalizzato, non esitare a contattarci.</p>
            <button className="cta-button primary">Richiedi Preventivo</button>
          </div>
        </section>
      </main>
  );
}
