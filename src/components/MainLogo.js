
import logoWhite from "../assets/images/mainLogoAsak.png";
import logoBlack from "../assets/images/mainLogoAsak.png";

import React from 'react';
import { Link } from 'react-router-dom'; // Import für schnelles Navigieren
import { useTranslation } from 'react-i18next'; // Um die Sprache zu erkennen


const MainLogo = ({ fixed }) => {
  const { i18n } = useTranslation();
  const homePath = `/${i18n.language || 'bg'}`;

  // Dynamische Ermittlung des Logo-Pfads
  let finalLogo;
  try {
    finalLogo = require("../assets/images/mainLogoAsak.png");
  } catch (e) {
    finalLogo = "/assets/images/mainLogoAsak.png";
  }

  return (
    <div className="navbar-header flex items-center">
      {/* !flex und items-center erzwingen die Sichtbarkeit im Bootstrap-Grid */}
      <Link to={homePath} className="navbar-brand !flex items-center !m-0 !p-0">
          <img 
            className={`logo logo-display ${fixed ? 'hidden' : 'block'}`} 
            src={finalLogo} 
            alt="ASAK Logo" 
            width="140" 
            height="40"
            style={{ 
                maxWidth: '140px',
                height: 'auto',
                objectFit: 'contain'
            }} 
          />
          <img 
            className={`logo logo-scrolled ${fixed ? 'block' : 'hidden'}`} 
            src={finalLogo} 
            alt="ASAK Logo" 
            width="140" 
            height="40"
            style={{ 
                maxWidth: '140px',
                height: 'auto',
                objectFit: 'contain'
            }} 
          />
      </Link>
    </div>
  );
};

export default MainLogo;
