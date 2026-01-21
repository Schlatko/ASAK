
import logoWhite from "../assets/images/mainLogoAsak.png";
import logoBlack from "../assets/images/mainLogoAsak.png";

import React from 'react';
import { Link } from 'react-router-dom'; // Import für schnelles Navigieren
import { useTranslation } from 'react-i18next'; // Um die Sprache zu erkennen

const MainLogo = ({ fixed }) => {
  const { i18n } = useTranslation();
  const homePath = `/${i18n.language || 'bg'}`;

  // Dynamisches Laden des Logos. Wir nutzen den Pfad, der in deiner Umgebung funktioniert.
  let logoImg;
  try {
    // Versuch 1: Interner Assets-Ordner (Webpack/CRA)
    logoImg = require("../assets/images/mainLogoAsak.png");
  } catch (e) {
    // Versuch 2: Public Ordner (Fallschirm)
    logoImg = "/assets/images/mainLogoAsak.png";
  }

  return (
    <div className="navbar-header">
      <div className="logo min-w-[140px] flex items-center h-full">
        <Link to={homePath} className="navbar-brand block">
          {/* WICHTIG: Wir entfernen die harten display-none Styles. 
            Stattdessen nutzen wir opacity oder lassen die Template-CSS Klassen arbeiten.
          */}
          <img 
            className={`logo-display transition-opacity duration-300 ${fixed ? 'opacity-0 absolute' : 'opacity-100 relative'}`} 
            src={logoImg} 
            alt="ASAK Logo" 
            width="140" 
            height="40"
            style={{ 
                maxWidth: '140px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
            }} 
          />
          <img 
            className={`logo-scrolled transition-opacity duration-300 ${fixed ? 'opacity-100 relative' : 'opacity-0 absolute'}`} 
            src={logoImg} 
            alt="ASAK Logo" 
            width="140" 
            height="40"
            style={{ 
                maxWidth: '140px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
            }} 
          />
        </Link>
      </div>
    </div>
  );
};




export default MainLogo;
