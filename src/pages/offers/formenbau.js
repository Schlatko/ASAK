import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import FormenServices from "./detail/FormenServices";
import FormenServicesLeft from "./detail/FormenServicesLeft";
import TitelASAK from "../../components/PageTitle/TitelASAK";

import FormenbauKomplett from "../../components/WhoWeAre/FormenbauKomplett";

import material from "../../assets/images/Formenbau/instrumentalna-ekipirovka-sofia-asak.webp";

import duesen from "../../assets/images/Formenbau/remont-poddryzhka-shpricformi-asak.webp";
import { useTranslation } from "react-i18next";
import ContactDetails from "../contact/ContactDetails";
import { Helmet } from "react-helmet";

//

const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t, i18n } = useTranslation('formenbau');

    return (
      <Loader>
 <Helmet>
  <title>
    {i18n.language === 'bg' 
      ? "Изработка на шприцформи и матрици София | ASAK" 
      : i18n.language === 'de' 
        ? "Formenbau & Werkzeugbau in Bulgarien | ASAK" 
        : "Mold Making & Tooling Services Bulgaria | ASAK"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Проектиране и производство на висококачествени матрици." :
    i18n.language === 'de' ? "Konstruktion und Bau von Spritzgusswerkzeugen in Sofia." :
    "Design and manufacturing of high-quality injection molds and tooling in Sofia."
  } />
  <link rel="alternate" hreflang="de" href="https://asak-bg.com/de/formenbau" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg/izrabotka-na-matrici" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en/mold-making" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/de/formenbau" />
</Helmet>
        <HeaderASAK />
        <TitelASAK title={t('title')} 
  tagline={t('tagline')}
  imageName="proektirane-shpricformi-matrici-asak.webp" // Der Name aus der Tabelle
  altText={t('alt_text')} // Den Alt-Text legst du in deinen i18n Dateien an
/>
        <FormenbauKomplett></FormenbauKomplett>
     
        <FormenServices
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={material}
        altText={t('alt_text2')}
      />
      <FormenServicesLeft
        title={t('header3')}
        tagline={t('sub3')}
        serviceImg={duesen}
        altText={t('alt_text3')}
      />
      
      
      <ContactDetails />
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  