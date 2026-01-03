
import logoWhite from "../assets/images/mainLogoAsak.png";
import logoBlack from "../assets/images/mainLogoAsak.png";

import React from 'react';
import { Link } from 'react-router-dom'; // Import für schnelles Navigieren
import { useTranslation } from 'react-i18next'; // Um die Sprache zu erkennen

const MainLogo = ({ collapse, showMenu }) => {
  const { i18n } = useTranslation();

  // Wir bauen den Pfad dynamisch, z.B. /de oder /bg
  const homePath = `/${i18n.language}`;

  return (
    <div className="navbar-header">
      <div className="logo">
        {/* Wir ersetzen <a> durch <Link> für Single Page Application Feeling */}
        <Link to={homePath}>
          <img className="logo logo-display" src={logoWhite} alt="ASAK Logo" />
          <img className="logo logo-scrolled" src={logoBlack} alt="ASAK Logo" />
        </Link>
      </div>
    </div>
  );
};


export default MainLogo;
