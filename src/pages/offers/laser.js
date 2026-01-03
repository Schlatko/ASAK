import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import LaserServices from "./detail/LaserServices";
import LaserServicesAnw from "./detail/LaserServicesAnw";
import TitelASAKLaser from "../../components/PageTitle/TitelASAKLaser";

import LaserKomplett from "../../components/WhoWeAre/LaserKomplett";

import serviceOneImg from "../../assets/images/laser/laser.png";
import serviceTwoImg from "../../assets/images/laser/laser.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";




const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t,i18n } = useTranslation('laser');

    return (
      <Loader>
     <Helmet>
  <title>
    {i18n.language === 'bg' 
      ? "Лазерно рязане и гравиране на метали София | ASAK" 
      : i18n.language === 'de' 
        ? "Laserschneiden & Lasergravur in Bulgarien | ASAK" 
        : "Precision Laser Cutting & Engraving Bulgaria | ASAK"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Прецизно лазерно рязане и гравиране на метални детайли в София." :
    i18n.language === 'de' ? "Hochwertiges Laserschneiden und Gravieren in Bulgarien." :
    "High-precision laser cutting and engraving services for industrial parts in Sofia."
  } />
  <link rel="alternate" hreflang="de" href="https://asak-bg.com/de/laser" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg/lazerno-gravirane" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en/laser-engraving" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/de/laser" />
</Helmet>

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
  