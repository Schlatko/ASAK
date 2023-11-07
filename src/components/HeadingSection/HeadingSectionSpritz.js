import React from "react";

const HeadingSection = ({ title, tagline, classAppend, font, children }) => {
  return (
    <div
      className={"col-sm-8 section-heading " + (classAppend ? classAppend : "")}
    >
      <h2
        className={font ? font : ""}
        data-aos-delay={100}
        data-aos={"fade-up"}
        data-aos-duration={700}
      >
        {title}
      </h2>
      
    </div>
  );
};

export default HeadingSection;
