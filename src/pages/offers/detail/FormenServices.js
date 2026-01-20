import React, { forwardRef } from "react";

import { useTranslation } from "react-i18next";
import ServiceBox from "../../../components/OurServices/ServiceBoxSpritz";

// Wir behalten die Imports bei, korrigieren aber die Pfade basierend auf der Dateistruktur


/**
 * SEO-optimierte FormenServices Komponente
 * @param {string} serviceImg - Pfad zum Hintergrundbild
 * @param {string} altText - SEO Alt-Text für das Hintergrundbild
 */
const FormenServices = forwardRef(({ serviceImg, altText, title, tagline }, ref) => {
  const { t } = useTranslation('formenservices');

  return (
    <section className="white-bg" id="service" ref={ref}>
      <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
        <div
          className="bg-flex-holder bg-flex-cover"
          style={{ 
            backgroundImage: serviceImg ? `url(${serviceImg})` : 'none',
            backgroundColor: '#f5f5f5' 
          }}
          role="img"
          aria-label={altText || t('head')}
        >
          {/* SEO-Fix: Verstecktes Bild für die Google Indexierung */}
          {serviceImg && (
            <img 
              src={serviceImg} 
              alt={altText || t('head')} 
              style={{ display: 'none' }} 
            />
          )}
        </div>
      </div>
      <div className="container">
        <div className="col-md-5 col-sm-7 offset-md-7 offset-sm-5">
          <h2
            className="font-700"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-duration={1000}
          >
            {t('head')}
          </h2>
          <h4
            className="mt-10 line-height-26"
            data-aos={"fade-up"}
            data-aos-delay={200}
            data-aos-duration={1000}
          >
            {t('desc')}
          </h4>
          <h4
            className="mt-10 line-height-26"
            data-aos={"fade-up"}
            data-aos-delay={200}
            data-aos-duration={1000}
          >
            {t('desc2')}
          </h4>
          <div className="left-service-box pt-40 pb-20 row">
            {t('services', { returnObjects: true }) && 
             Array.isArray(t('services', { returnObjects: true })) && 
             t('services', { returnObjects: true }).map((service, i) => (
              <ServiceBox
                key={service.id || i}
                icon={service.icon}
                title={service.title}
                sub={service.sub}
                index={i}
                text={service.text}
                text1={service.text1}
              >
                {service.text}
              </ServiceBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default FormenServices;