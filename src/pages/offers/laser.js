import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import LaserServices from "./detail/LaserServices";
import LaserServicesAnw from "./detail/LaserServicesAnw";
import TitelASAKLaser from "../../components/PageTitle/TitelASAKLaser";
import Spritzdetail from "./detail/spritzdetail";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsFormenbauKomplett from "../../components/FunFacts/FactsFormenbauKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import LaserKomplett from "../../components/WhoWeAre/LaserKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import serviceOneImg from "../../assets/images/laser/laser.png";
import serviceTwoImg from "../../assets/images/laser/laser2.png";
import { useTranslation } from "react-i18next";




const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('laser');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAKLaser title={t('header')} tagline={t('sub')} />
        <LaserKomplett></LaserKomplett>
       
        <LaserServices
        title="Laserbeschriftungen von Kunststoffen"
        tagline="Die Laserbeschriftung auf Kunststoff ist eine hochpräzise Methode zur Kennzeichnung von Kunststoffoberflächen mittels Laserstrahl."
        serviceImg={serviceOneImg}
      />
      <LaserServicesAnw
        title="Laserbeschriftungen von Kunststoffen"
        tagline="Die Laserbeschriftung auf Kunststoff ist eine hochpräzise Methode zur Kennzeichnung von Kunststoffoberflächen mittels Laserstrahl."
        serviceImg={serviceTwoImg}
      />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  