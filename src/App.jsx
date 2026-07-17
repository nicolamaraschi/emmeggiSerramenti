import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:slug" element={<CategoryPage />} />
      </Routes>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo-emmegi.png" alt="Emmegi Serramenti" className="logo-img" />
              <p>L’amore di fare le cose per bene, dal 1990.</p>
            </div>
            <div className="footer-links">
              <h3>Contatti</h3>
              <p>Email: info@serramentiemmegi.it</p>
              <p>Tel: 02 45708405</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Emmegi Serramenti. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
