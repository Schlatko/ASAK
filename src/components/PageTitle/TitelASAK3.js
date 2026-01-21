import React, { useState, useEffect } from "react";



/**

 * SEO-optimierte PageTitle Komponente

 * @param {string} title - Hauptüberschrift (H1)

 * @param {string} tagline - Unterüberschrift (H4)

 * @param {string} imageUrl - Die bereits aufgelöste URL des Bildes

 * @param {string} altText - Sprachspezifischer Alt-Text für SEO

 */

const PageTitleService = ({ title, tagline, imageUrl, altText }) => {

   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup-Funktion
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    <section

      className="relative title-hero-bg service-cover-bg2 overflow-hidden flex items-center justify-center w-full"

      style={{

        backgroundColor: '#000',

        minHeight: '600px', // Ausgewogene Mindesthöhe

        marginTop: 0

      }}

    >

      {/* PERFORMANCE-FIX: Echtes Bild statt CSS-Hintergrund */}

      {imageUrl && (

        <img

          src={imageUrl}

          alt={altText || "ASAK - Industrie-Dienstleistungen"}

          fetchpriority="high"

          loading="eager"

          /* LOGIK-WECHSEL:

             - Standardmäßig (Mobil/Tablet): 'object-cover' füllt den Schirm ohne Ränder.

             - Ab 'lg' (Large Screens/Desktop): 'object-contain' zeigt das ganze Bild.

          */

          className="absolute top-0 left-0 w-full h-full object-cover lg:object-contain z-0"

          decoding="sync"

          style={{

            margin: 0,

            display: 'block', 
            minWidth: isLargeScreen ? '100%' : 'auto',
            minHeight: isLargeScreen ? 'auto' : '100%'

          }}

        />

      )}



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