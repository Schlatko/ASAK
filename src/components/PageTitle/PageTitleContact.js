import React from "react";

const PageTitleContact = ({ title, tagline }) => (
  <section
    className="title-hero-bg2 contact-cover-bg"
    data-stellar-background-ratio="0.2"
  >
    <div className="container">
      <div className="page-title text-center">
        <h1>{title}</h1>
        <h4 className="text-uppercase mt-30 white-color">{tagline}</h4>
      </div>
    </div>
  </section>
);

export default PageTitleContact;
