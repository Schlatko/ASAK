import React from "react";
import Icofont from "react-icofont";


const ServiceBox = ({ icon, title, children, index, sub, text, text2, text3 }) => {
  const listItems = text.map((number, index) =>
  <li>{number.test}</li>
  );

  return (
  <div
    className="col-md-12 feature-box text-left mb-0 col-sm-6"
    data-aos={"fade-up"}
    data-aos-delay={`${index}00`}
    data-aos-duration={1000}
  >
    
    <div className="float-right">

      
      <h2 className="mt-0 green-color">{title}</h2>
     
      <ul className="ml-50 font-18px dark-color line-height-26">
      <li>{listItems}</li>  
       </ul>
        
      


      

    </div>

  
  </div>
);
};
export default ServiceBox;
