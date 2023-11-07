import React from "react";

const HeadingSection = ({ title, tagline, classAppend, font, children }) => {
  return (
    <div
      className={"col-sm-8 section-heading " + (classAppend ? classAppend : "")}
    >

        <h4
          className={"text-uppercase " + (font ? font : "")}
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-duration={700}
        >
          {`- ${tagline} -`}
        </h4>
     
    </div>
  );
};

export default HeadingSection;
