import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import TitelASAKFormenbau from "../../components/PageTitle/TitelASAKFormenbau";
import Spritzdetail from "./detail/spritzdetail";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsSpritzKomplett from "../../components/FunFacts/FactsSpritzKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import FormenbauKomplett from "../../components/WhoWeAre/FormenbauKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import { useTranslation } from "react-i18next";




const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('formenbau');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAKFormenbau title={t('header')} tagline={t('sub')} />
        <FormenbauKomplett></FormenbauKomplett>
       
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  