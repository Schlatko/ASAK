import React from "react";

import HeadingSectionSpritzKomplett from "../HeadingSection/HeadingSectionSpritzKomplett";
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
        <HeadingSectionSpritzKomplett tagline={t('tagline')}>
       
        </HeadingSectionSpritzKomplett>
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
