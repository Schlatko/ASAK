import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import i18n from 'i18next'; // Stelle sicher, dass i18n importiert ist
import Flag from 'react-world-flags'; // Deine Flaggen-Komponente
import { slugMapping } from "../pages/others/slugs"; // Importiere das Mapping

const LanguageSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (newLng) => {
    const pathParts = location.pathname.split('/').filter(Boolean); // [lang, slug]
    const currentLang = pathParts[0];
    const currentSlug = pathParts[1];

    let newSlug = ""; // Standardmäßig leer lassen für Home

    if (currentSlug) {
      // Wenn ein Slug da ist (z.B. "spritzguss"), suchen wir die Übersetzung
      for (let key in slugMapping) {
        const translations = slugMapping[key];
        if (Object.values(translations).includes(currentSlug)) {
          newSlug = translations[newLng];
          break;
        }
      }
    }
  
    i18n.changeLanguage(newLng);
    
    // Wenn newSlug leer ist, landen wir sauber auf /bg/ oder /de/
    // Wenn nicht, auf /bg/shpritsovane
    navigate(`/${newLng}/${newSlug}`);
  };

  return (
    <div>
      <a style={{ cursor: 'pointer' }} onClick={() => changeLanguage('bg')}>
        <Flag code="bg" style={{ width: '20px', marginRight: '5px' }} />
      </a>
      
      <a className="dropdown-toggle" style={{ cursor: 'pointer' }} onClick={() => changeLanguage('de')}>
        <Flag code="de" style={{ width: '20px', marginRight: '5px' }} />
      </a>

      <a className="dropdown-toggle" style={{ cursor: 'pointer' }} onClick={() => changeLanguage('en')}>
        <Flag code="gb" style={{ width: '20px' }} />
      </a>
    </div>
  );
};

export default LanguageSelector;