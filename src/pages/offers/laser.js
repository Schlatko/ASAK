import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import LaserServices from "./detail/LaserServices";
import LaserServicesAnw from "./detail/LaserServicesAnw";
import TitelASAK from "../../components/PageTitle/TitelASAK2";
import heroImage from "../../assets/images/lazerno-gravirane-markirane-detayli-asak.webp"
import LaserKomplett from "../../components/WhoWeAre/LaserKomplett";

import serviceOneImg from "../../assets/images/laser/pretsizno-lazerno-gravirane-asak.webp";
import serviceTwoImg from "../../assets/images/laser/lazerna-tehnologiya-plastmasa-metal-asak.webp";
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
        <TitelASAK title={t('header')} 
        imageUrl={heroImage}
  tagline={t('sub')}
  imageName="lazerno-gravirane-markirane-detayli-asak.webp" // Der Name aus der Tabelle
  altText={t('alt_text')} // Den Alt-Text legst du in deinen i18n Dateien an
/>
        <LaserKomplett></LaserKomplett>
       
        <LaserServices
        title="Laserbeschriftungen von Kunststoffen"
        tagline="Die Laserbeschriftung auf Kunststoff ist eine hochpräzise Methode zur Kennzeichnung von Kunststoffoberflächen mittels Laserstrahl."
        serviceImg={serviceOneImg}
        altText={t('alt_text2')}
      />
      <LaserServicesAnw
        title="Laserbeschriftungen von Kunststoffen"
        tagline="Die Laserbeschriftung auf Kunststoff ist eine hochpräzise Methode zur Kennzeichnung von Kunststoffoberflächen mittels Laserstrahl."
        serviceImg={serviceTwoImg}
        altText={t('alt_text3')}
      />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  