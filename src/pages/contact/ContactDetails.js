import React from "react";
import ContactFormFive from "./ContactFormASAK";
import { useTranslation } from "react-i18next";

const ContactThree = () =>  {
  const { t } = useTranslation('contactform');
  return (
  <section className="contact-us dark-bg">
    <div className="container">
      <h3 className="white-color">{t('contactform.header')}</h3>
      <div className="row">
        <div className="col-md-8">
          <ContactFormFive />
        </div>
        <div className="col-md-4">
          <h3 className="white-color">{t('contactform.adhead')}</h3>
          <address className="white-color">
          {t('contactform.strasse')}
            <br />
            {t('contactform.ort')}
            <br />
            <a href="tel:+359888724803">{t('contactform.tel')}</a>
             <br />
            <a href="tel:+359879221812">{t('contactform.tel2')}</a>
            <br />
            <a href="mailto:#">{t('contactform.mail')}</a>
          </address>
          <h3 className="white-color">{t('contactform.arbeitszeitenh')}</h3>
          <p className="white-color">
            <span>{t('contactform.arbeitszeiten')}</span> 
          </p>
        </div>
      </div>
    </div>
  </section>
);
};

export default ContactThree;
