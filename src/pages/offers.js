import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../components/Loader/Loader";
import FooterASAK from "../components/Footer/FooterASAK";
import HeaderASAK from "../components/Header/HeaderASAK";
import TitelASAK from "../components/PageTitle/TitelASAK";

import OffersASAK from "../components/Services/Construction/OffersASAK";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";






const offers = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t, i18n } = useTranslation('offershead');

    return (
      <Loader>
        <Helmet>
  <title>
    {i18n.language === 'bg' 
      ? "Услуги и производство | АСАК – Шприцоване и матрици" 
      : i18n.language === 'de' 
        ? "Unsere Leistungen | ASAK – Spritzguss, Formenbau & Laser" 
        : "Our Services | ASAK – Injection Molding & Tooling Solutions"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Индустриални услуги в София: шприцоване на пластмаса, изработка на матрици, лазерно рязане и 3D принтиране." :
    i18n.language === 'de' ? "Professionelle Fertigung in Bulgarien: Spritzguss, Werkzeugbau, Laserschneiden und 3D-Druck aus einer Hand." :
    "Industrial services in Sofia: Plastic injection molding, mold making, laser cutting, and 3D printing for your success."
  } />
  <link rel="alternate" hreflang="de" href="https://asak-bg.com/de/leistungen" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg/uslugi" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en/services" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/de/leistungen" />
</Helmet>

        <HeaderASAK />
        <TitelASAK title={t('header')} tagline={t('sub')} />
        <OffersASAK />
  
        <FooterASAK />
      </Loader>
    );
  };
  
  export default offers;
  