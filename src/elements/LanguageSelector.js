import React from 'react';
import Flag from 'react-world-flags';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import Icofont from "react-icofont";

const LanguageSelector = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }


  return (
   <div >
   
      <a href="/"  className="dropdown-toggle" onClick={() => changeLanguage('de')}>
        <Flag code="de" />
      </a>
     
      
      <a  href="/" className="dropdown-toggle" onClick={() => changeLanguage('bg')}>
        <Flag code="bg" />
      </a>

      <a  href="/" className="dropdown-toggle" onClick={() => changeLanguage('en')}>
        <Flag code="gb" />
      </a>
     
      </div>
  )
}

export default LanguageSelector