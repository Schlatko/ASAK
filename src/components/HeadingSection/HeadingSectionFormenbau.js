import React from "react";

const HeadingSection = ({ title, tagline, classAppend, font, text, children }) => {
  return (
    <div
      className={"col-sm-8 section-heading " + (classAppend ? classAppend : "")}
    >
      {/* <h2
        className={font ? font : ""}
        data-aos-delay={100}
        data-aos={"fade-up"}
        data-aos-duration={700}
      >
        {title}
      </h2>
       <h4
          className={"text-uppercase " + (font ? font : "")}
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-duration={700}
        >
          {`- ${tagline} -`}
        </h4>*/} 
       
        <h4
          className={" " + (font ? font : "")}
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-duration={700}
        >
          {text}
        </h4>
     
    </div>
  );
};

export default HeadingSection;
