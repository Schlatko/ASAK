import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import { useTranslation } from "react-i18next";

const WhoWeAreThree = () => {
const { t } = useTranslation('home');
//  {t('header', {returnObjects: true}).map((dropdown, i)
//{dataFeatures.map((feature, i) 
return (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title={t('header')} tagline={t('tagline')}>
         {t('text')}
        </HeadingSection>
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
export default WhoWeAreThree;
