import React from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";
import { useTranslation } from "react-i18next";

const Ueberuns = () => {
  const { t } = useTranslation('ueberuns');

  return(
  <section className="white-bg">
   
    <div className="container">
      <div>
        <h2 className="font-700">{t('title')}</h2>
        <h4 className="mt-10 line-height-26 default-color">{t('tagline')}</h4>
        <p className="mt-20">
        {t('text1')}
        </p>
        <p>
        {t('text2')}
        </p>
        <p>
        {t('text3')}
        </p>
        <p>
        {t('text4')}
        </p>
        
      
      </div>
    </div>
  </section>
);
};

export default Ueberuns;
