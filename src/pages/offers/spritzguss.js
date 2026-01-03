import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import TitelASAK from "../../components/PageTitle/TitelASAK";
import Spritzdetail from "../offers/detail/spritzdetail";
import SpritzServices from "./detail/SpritzServices";
import SpritzServicesLeft from "./detail/SpritzservicesLeft";
import SpritzServices2 from "./detail/SpritzServices2";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsSpritzKomplett from "../../components/FunFacts/FactsSpritzKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import SpritzKomplett from "../../components/WhoWeAre/SpritzKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import { useTranslation } from "react-i18next";
import spritzmaschine from "../../assets/images/Spritzguss/spritz5.jpg";
import spritzmaschine2 from "../../assets/images/Spritzguss/spritz2.jpg";
import spritzmaschine3 from "../../assets/images/Spritzguss/spritz1.jpg";
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
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/de/spritzguss" />
</Helmet>
        <HeaderASAK />
        <TitelASAK title={t('header')} tagline={t('sub')} />
        <SpritzKomplett></SpritzKomplett>
        
      <SpritzServices
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine}
      />
      <SpritzServicesLeft
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine2}
      />
      <SpritzServices2
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine3}
      />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  