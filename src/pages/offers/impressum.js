import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";

import Impressum from "./detail/Impressum";





const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    

    return (
      <Loader>

        <HeaderASAK />
        
       
      <Impressum
      
        
      />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  