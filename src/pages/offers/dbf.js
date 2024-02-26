import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import DbfServices from "./detail/DbfServices";
import TitelASAKdbf from "../../components/PageTitle/TitelASAKdbf";
import Spritzdetail from "./detail/spritzdetail";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsFormenbauKomplett from "../../components/FunFacts/FactsFormenbauKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";

import OffersASAK from "../../components/Services/Construction/OffersASAK";
import serviceOneImg from "../../assets/images/dbf/dbf.png";
import { useTranslation } from "react-i18next";
import LaserKomplett from "../../components/WhoWeAre/LaserKomplett";
import DbfKomplett from "../../components/WhoWeAre/DbfKomplett";



const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('dbf');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAKdbf title={t('header')} tagline={t('sub')} />
     
        <DbfKomplett></DbfKomplett>
     
        <DbfServices
        title="Technologien"
        tagline="Was wir zu bieten haben."
        serviceImg={serviceOneImg}
      />
      
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  