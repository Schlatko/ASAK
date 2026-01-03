import React from "react";
import Loader from "../components/Loader/Loader";
import PageTitleContact from "../components/PageTitle/PageTitleContact";
import ContactDetails from "./contact/ContactDetails";
import HeaderASAK from "../components/Header/HeaderASAK";
import Map from "../components/Maps/Gmap";
import FooterASAK from "../components/Footer/FooterASAK";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ContactSimple = () => {
  // 2. i18n hier definieren
  const { i18n } = useTranslation();

  // 3. return() verwenden
  return (
    <Loader>
      <Helmet>
        <title>
          {i18n.language === 'bg' 
            ? "Контакт и локация | АСАК София – Свържете се с нас" 
            : i18n.language === 'de' 
              ? "Kontakt & Anfahrt | ASAK Sofia – Jetzt unverbindlich anfragen" 
              : "Contact & Location | ASAK Sofia – Get in Touch"}
        </title>
        <meta name="description" content={
          i18n.language === 'bg' ? "Свържете се с АСАК ЕООД в София. Тук ще намерите нашия адрес, телефон и форма за запитвания за вашия проект." :
          i18n.language === 'de' ? "Kontaktieren Sie ASAK in Sofia. Adresse, Telefonnummer und Kontaktformular für Ihre Anfragen zum Spritzguss und Formenbau." :
          "Contact ASAK EOOD in Sofia. Find our address, phone number, and inquiry form for your manufacturing projects in Bulgaria."
        } />
        <link rel="alternate" hreflang="de" href="https://asak-bg.com/de/ueberuns" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg/za-nas" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en/about-us" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/de/ueberuns" />
      </Helmet>

      <HeaderASAK />
      
      <PageTitleContact />
      <ContactDetails />

      <section className="pt-0 pb-0 map-section">
        <Map classAppend="wide" />
      </section>
      
      <FooterASAK />
    </Loader>
  );
};

export default ContactSimple;
