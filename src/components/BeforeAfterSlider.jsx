import React, { useState } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="before-after-container">
      {/* Immagine Sotto (Prima) */}
      <img src={beforeImage} alt="Prima dell'installazione" className="image-before" />
      
      {/* Immagine Sopra (Dopo) con Clip Path */}
      <img 
        src={afterImage} 
        alt="Dopo l'installazione" 
        className="image-after" 
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      />
      
      {/* Linea di separazione e handle */}
      <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
        <div className="slider-handle">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Input Range Invisibile in cima a tutto */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={handleSliderChange}
        className="slider-input"
        aria-label="Controlla lo slider Prima/Dopo"
      />
      
      {/* Etichette visive */}
      <span className="label-before">Prima</span>
      <span className="label-after">Dopo</span>
    </div>
  );
}
