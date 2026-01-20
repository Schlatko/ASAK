import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import ProtoServices from "./detail/ProtoServices";
import TitelASAK from "../../components/PageTitle/TitelASAK";

import PrototypenKomplett from "../../components/WhoWeAre/PrototypenKomplett";

import serviceOneImg from "../../assets/images/Prototypen/3d-modelirane-plastmasovi-prototipi-asak.webp";
import { useTranslation } from "react-i18next";
import ContactDetails from "../contact/ContactDetails";
import { Helmet } from "react-helmet";



const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t, i18n } = useTranslation('prototypen');

    return (
      <Loader>
        <Helmet>
  <title>
    {i18n.language === 'bg' 
      ? "3D принтиране и бързо прототипиране София | ASAK" 
      : i18n.language === 'de' 
        ? "3D-Druck & Prototyping in Bulgarien | ASAK" 
        : "3D Printing & Rapid Prototyping Sofia | ASAK"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Изработка на индустриални прототипи или сери чрез 3D принтиране в София." :
    i18n.language === 'de' ? "Schnelle Herstellung von Prototypen mittels 3D-Druck in Sofia." :
    "Industrial 3D printing and rapid prototyping services in Sofia, Bulgaria."
  } />
  <link rel="alternate" hreflang="de" href="https://asak-bg.com/de/prototypen" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg/3d-printirane" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en/3d-printing" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/de/prototypen" />
</Helmet>

        <HeaderASAK />
         <TitelASAK title={t('header')} 
  tagline={t('sub')}
  imageName="3d-printirane-prototipirane-sofia-asak.webp" // Der Name aus der Tabelle
  altText={t('alt_text')} // Den Alt-Text legst du in deinen i18n Dateien an
/>
        <PrototypenKomplett></PrototypenKomplett>
        <ProtoServices
        /*title="Technologien"
    tagline="Was wir zu bieten haben."*/
        serviceImg={serviceOneImg}
      />
       <ContactDetails />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  