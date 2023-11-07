import React from "react";

import HeadingSection from "../../HeadingSection/HeadingSection.js";

import Icofont from "react-icofont";
import { useTranslation, Trans } from "react-i18next";


const WhoWeAreThree = () => {
const { t } = useTranslation('offers');
//  {t('header', {returnObjects: true}).map((dropdown, i)
//{dataFeatures.map((feature, i) 
return (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title={t('header')} tagline={t('tagline')}>
         <Trans i18nKey={t('text')}></Trans>
        </HeadingSection>
      </div>
      <div className="container">
      <div className="row service-box-style-01 mt-50">
      {t('offers', {returnObjects: true}).map((service) => (
          <div className="col-md-6 col-sm-6 col-xs-12" key={service.id}>
            
            <div className="flipper">
            <a href={`${service.link}`}  className={"nav-link"} data-toggle="service">
            
              <div className="text-center mb-50 main-box">
                <div className="box-front height-300px white-bg">
                  <div className="content-wrap">
                    <Icofont
                      icon={service.icon}
                      className="font-40px dark-color"
                    />
                    <h3 className="font-600">{service.title}</h3>
                    <p className="font-400 mt-20 dark-color">{service.text}</p>
                   
            
              
              
         
                  </div>
                </div>
                <div className="box-back height-300px green-bg">
                  <div className="content-wrap">
                    <Icofont
                      icon={service.icon}
                      className="font-40px dark-color"
                    />
                    <h3 className="font-600">{service.title}</h3>
                    <p className="font-400 mt-20 dark-color">{service.text}</p>
                  </div>
                </div>
              </div>
              </a>
            </div>
           
          </div>
        ))}
      </div>
    </div>
    </div>
  </section>
);
}
export default WhoWeAreThree;
