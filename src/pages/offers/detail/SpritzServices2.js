import React, { forwardRef } from "react";
import dataServices from "../../../data/Services/our-services-two.json";
import { useTranslation } from "react-i18next";
import ServiceBox from "../../../components/OurServices/ServiceBoxSpritz";

const SpritzServices = forwardRef(({ serviceImg, title, tagline }, ref) => {
const { t } = useTranslation('spritzservices2');

return (
  
  <section className="white-bg" id="service" ref={ref}>
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
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
        {t('services', {returnObjects: true}).map((service, i) => (
          
            <ServiceBox
              key={service.id}
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

export default SpritzServices;
