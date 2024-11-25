import React from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";
import { useTranslation } from "react-i18next";

const Ueberuns = () => {
  const { t } = useTranslation('ueberuns');

  return(
  <section className="white-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
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
