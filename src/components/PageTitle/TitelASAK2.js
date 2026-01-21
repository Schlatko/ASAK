import React from "react";

/**
 * SEO-optimierte PageTitle Komponente
 * Diese Version erzwingt die Abdeckung des gesamten Bereichs, um schwarze Balken zu eliminieren.
 */
const PageTitleService = ({ title, tagline, imageUrl, altText, hideImageOnMobile = false }) => {
  return (
    <section
      className="relative flex items-center justify-center w-full overflow-hidden"
      style={{ 
        backgroundColor: '#1a1a1a',  
        minHeight: '450px',
        height: '55vh', // Dynamische Höhe passend zum 1920x800 Format
        maxHeight: '700px',
        marginTop: 0,
        padding: 0
      }}
    >
      {/* PERFORMANCE-FIX & ZERO-GAP STABILITY */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={altText || "ASAK - Industrie-Dienstleistungen"} 
          fetchpriority="high" 
          loading="eager"
          /* WICHTIG: 'min-h-full' und 'min-w-full' zusätzlich zu 'object-cover' 
             erzwingen, dass das Bild niemals kleiner als der Container wird.
          */
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${hideImageOnMobile ? 'hidden md:block' : 'block'}`}
          style={{ 
            minWidth: '100%', 
            minHeight: '100%',
            objectPosition: 'center center' ,
            filter: 'brightness(0.5)' // Senkt die Helligkeit des Bildes auf 50%
          }}
          decoding="sync"
        />
      )}

      {/* Dunkles Overlay - Zusätzliche Ebene für Textkontrast */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 5)' }} // Hier kannst du die zusätzliche Abdunkelung steuern
      ></div>
      {/* Text-Content */}
 {/* Zentriertes Overlay für gleichmäßige Text-Lesbarkeit */}

      <div className="container">

        <div className="page-title text-center col-sm-8 hero-text white-color text-center">

          <h1 className="white-color">{title}</h1>

          <h4 className="text-uppercase mt-30 white-color">{tagline}</h4>

        </div>

      </div>
    </section>
  );
};

export default PageTitleService;