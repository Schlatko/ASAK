import React from "react";


const PageTitleService = ({ title, tagline }) => (
  <section
    className="title-hero-bg service-cover-bg4"
    data-stellar-background-ratio="0.2"
  >
   
    <div className="container">
      <div className="row">
      <div className="col-sm-8 hero-text white-color text-center">
        <h2>{title}</h2>
        <h4 className="text-uppercase white-color">{tagline}</h4>
      </div>
    </div>
    </div>
 
  </section>
);

export default PageTitleService;
