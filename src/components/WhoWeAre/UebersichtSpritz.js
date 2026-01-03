import React from "react";
import HeadingSection from "../HeadingSection/HeadingSectionSpritz";

import { useTranslation } from "react-i18next";

const WhoWeAreThree = () => {
const { t } = useTranslation('spritzguss');
//  {t('header', {returnObjects: true}).map((dropdown, i)
//{dataFeatures.map((feature, i) 
return (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title={t('aftersub')}>
        
        </HeadingSection>
      </div>
      <div className="row mt-50">
      
      </div>
    </div>
  </section>
);
}
export default WhoWeAreThree;
