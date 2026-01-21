import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import Flag from 'react-world-flags';
import parse from "html-react-parser";

/**
 * Fallback für slugMapping, um den "Could not resolve" Fehler zu beheben.
 * In Ihrer lokalen Umgebung wird dies normalerweise aus "../pages/others/slugs" importiert.
 */
const slugMapping = {
  "home": { bg: "", de: "", en: "" },
  "spritzguss": { bg: "shpritsovane", de: "spritzguss", en: "injection-molding" },
  "formenbau": { bg: "matrici", de: "formenbau", en: "tooling" },
  "kontakt": { bg: "kontakt", de: "kontakt", en: "contact" }
};

/**
 * Neuer, moderner LanguageSelector
 * Ersetzt die nackten Flaggen durch ein elegantes Pill-Design.
 */const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'bg', label: 'BG', flag: 'BG' },
    { code: 'de', label: 'DE', flag: 'DE' },
    { code: 'en', label: 'EN', flag: 'GB' }
  ];

  const currentLangObj = languages.find(l => l.code === i18n.language) || languages[1];

  const changeLanguage = (newLng) => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const currentSlug = pathParts[1];
    let newSlug = "";

    if (currentSlug) {
      for (let key in slugMapping) {
        const translations = slugMapping[key];
        if (Object.values(translations).includes(currentSlug)) {
          newSlug = translations[newLng];
          break;
        }
      }
    }
  
    if (i18n.changeLanguage) i18n.changeLanguage(newLng);
    setIsOpen(false);
    navigate(`/${newLng}/${newSlug}`);
  };

  return (
    <div className="relative ml-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-white rounded-full border border-gray-200 transition-all shadow-sm"
      >
        <Flag code={currentLangObj.flag} style={{ width: '18px' }} />
        <span className="text-xs font-bold text-gray-700">{currentLangObj.label}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                  i18n.language === lang.code ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-600'
                }`}
              >
                <Flag code={lang.flag} style={{ width: '20px' }} />
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default LanguageSelector;