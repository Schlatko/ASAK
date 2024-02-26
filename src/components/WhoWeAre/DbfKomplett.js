import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSectionFormenbau from "../HeadingSection/HeadingSectionFormenbau";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import { useTranslation } from "react-i18next";
import AccordionsComponent from "../Accordions/AccordionsComponent";
import dataAccordion from "../../data/Accordion/accordions-data.json";

const DbfKomplett = () => {
const { t } = useTranslation('dbf');
//  {t('header', {returnObjects: true}).map((dropdown, i)
//{dataFeatures.map((feature, i) 
return (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSectionFormenbau tagline={t('tagline')} text={t('text')}>
       
        </HeadingSectionFormenbau>
      </div>
     
      <div className="row mt-50">
        
      {t('services', {returnObjects: true}).map((feature, i) => (
          <FeatureBoxTwo
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            index={i}
          >
            {feature.text}
          </FeatureBoxTwo>
        ))}
      </div>
    </div>

    
  </section>
);
}
export default DbfKomplett;
