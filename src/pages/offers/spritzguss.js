import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import TitelASAK from "../../components/PageTitle/TitelASAK2";

import SpritzServices from "./detail/SpritzServices";
import SpritzServicesLeft from "./detail/SpritzservicesLeft";
import SpritzServices2 from "./detail/SpritzServices2";
import heroImage from "../../assets/images/avtomatizirano-shpritsovane-plastmasi-asak.webp"

import SpritzKomplett from "../../components/WhoWeAre/SpritzKomplett";

import { useTranslation } from "react-i18next";
import spritzmaschine from "../../assets/images/Spritzguss/shpritsovane-pod-nalyagane-detayli-asak.webp";
import spritzmaschine2 from "../../assets/images/Spritzguss/seriino-proizvodstvo-plastmasa-asak.webp";
import spritzmaschine3 from "../../assets/images/Spritzguss/kontrol-kachestvo-proizvodstvo-asak.webp";
import { Helmet } from "react-helmet";




const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t, i18n } = useTranslation('spritzguss');

    return (
      <Loader>
{/* 2. Helmet direkt hier platzieren */}
<Helmet>
  <title>
    {i18n.language === 'bg' 
      ? "Шприцоване на пластмаси и матрици София | ASAK" 
      : i18n.language === 'de' 
        ? "Spritzguss & Formenbau in Bulgarien | ASAK" 
        : "Injection Molding & Mold Making Bulgaria | ASAK"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Професионално шприцоване и изработка на матрици в София." :
    i18n.language === 'de' ? "Präziser Spritzguss und Formenbau in Sofia." :
    "Professional injection molding and mold making services in Sofia, Bulgaria."
  } />
  <link rel="alternate" hreflang="de" href="https://asak-bg.com/de/spritzguss" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg/shpritsovane" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en/injection-molding" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/bg/shpritsovane" />
</Helmet>
        <HeaderASAK />
        
        <TitelASAK title={t('header')} 
        imageUrl={heroImage}
  tagline={t('sub')}
  imageName="avtomatizirano-shpritsovane-plastmasi-asak.webp" // Der Name aus der Tabelle
  altText={t('alt_text')} // Den Alt-Text legst du in deinen i18n Dateien an
/>
        <SpritzKomplett></SpritzKomplett>
        
      <SpritzServices
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine}
        altText={t('alt_text2')} 
      />
      <SpritzServicesLeft
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine2}
        altText={t('alt_text3')} 
      />
      <SpritzServices2
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine3}
        altText={t('alt_text4')} 
      />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  