import React, { useState } from "react";
import parse from "html-react-parser";

import { useTranslation } from "react-i18next";

const FunFactsArchitecture = ({ title, tagline, children }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  const { t } = useTranslation('formenfact');

  return (
    <section
      className="parallax-bg-17  fixed-bg fact-section"
      data-stellar-background-ratio="0.2"
    >
      <div className="overlay-bg"></div>
      <div className="container">
        <div className="row white-color">
          <div className="col-md-3">
            <h2
              className="text-uppercase font-700"
              data-aos={"fade-right"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              {title}
            </h2>
            <h3
              className="text-uppercase"
              data-aos={"fade-right"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              - {tagline} -
            </h3>
          </div>
          <div className="col-md-8">
            <div className="mt-15">
              <h4
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                {children ? parse(children) : ""}
              </h4>
            </div>
          </div>
        </div>
        <div className="row mt-30"> 	
          <div className="col-md-3"> </div>
          <div className="col-md-8 text-left">
            <div className="row text-left">
            {t('counter', {returnObjects: true}).map((counter, i) => (
                  <div
                    className="col-md-12 counter col-sm-12"
                    key={counter.id}
                    data-aos={"fade-up"}
                    data-aos-delay={`${i}00`}
                    data-aos-duration={700}
                  >
                    <h2 className="count white-color font-200 text-left">
                      {counter.value}
                    </h2>
                    <h2 className="text-left green-color">{counter.title}</h2>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsArchitecture;
