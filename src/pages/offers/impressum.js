import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import TitelASAK from "../../components/PageTitle/TitelASAK";
import Spritzdetail from "./detail/spritzdetail";
import Impressum from "./detail/Impressum";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsSpritzKomplett from "../../components/FunFacts/FactsSpritzKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import SpritzKomplett from "../../components/WhoWeAre/SpritzKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import { useTranslation } from "react-i18next";
import material from "../../assets/images/Formenbau/Formenbau1.png";




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
  