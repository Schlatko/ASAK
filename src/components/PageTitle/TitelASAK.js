import React from "react";

/**
 * SEO-optimierte PageTitle Komponente
 * @param {string} title - Hauptüberschrift (H1)
 * @param {string} tagline - Unterüberschrift (H4)
 * @param {string} imageName - Name der WebP Datei (z.B. "matrici-bg.webp")
 * @param {string} altText - Sprachspezifischer Alt-Text für SEO
 */
const PageTitleService = ({ title, tagline, imageName, altText }) => {
  // Sicherer Import des Bildes
  let imageUrl = null;
  
  if (imageName) {
    try {
      // Dynamisches Require für Webpack
      imageUrl = require(`../../assets/images/${imageName}`);
    } catch (err) {
      console.warn(`Bild konnte nicht geladen werden: ${imageName}`, err);
    }
  }

  return (
    <section
      className="title-hero-bg service-cover-bg2"
      data-stellar-background-ratio="0.2"
      style={{
        // Dynamisches Hintergrundbild setzen
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundColor: "#333" // Fallback Hintergrundfarbe
      }}
    >
      {/* SEO-Fix: Unsichtbares Bild für Google-Indexierung */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={altText || "ASAK - Industrie-Dienstleistungen"} 
          style={{ display: 'none' }} 
        />
      )}

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