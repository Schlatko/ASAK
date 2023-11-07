import React from 'react';
import Flag from 'react-world-flags';
import i18n from '../i18n';
import { withTranslation } from 'react-i18next';
import Icofont from "react-icofont";

const LanguageSelector = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }


  return (
   <div >
     

      
      <a className="dropdown-toggle" onClick={() => changeLanguage('de')}>
        <Flag code="de" />
      </a>
     
      
     

    
      </div>
  )
}

export default LanguageSelector