import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleContact from "../components/PageTitle/PageTitleContact";
import ContactDetails from "./contact/ContactDetails";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import FooterOne from "../components/Footer/FooterOne";
import HeaderASAK from "../components/Header/HeaderASAK";

import Map from "../components/Maps/Gmap";
import FooterASAK from "../components/Footer/FooterASAK";
import Ueberuns from "../components/OurServices/Ueberuns";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const ContactSimple = () => {
  // 2. Den Hook hier oben aufrufen, um 'i18n' zu erhalten
  const { i18n } = useTranslation();
  // 3. 'return' hinzufügen, um den JSX-Block zurückzugeben
  return (
    <Loader>

<Helmet>
  <title>
    {i18n.language === 'bg' 
      ? "За нас | АСАК – 30 години опит в шприцоването" 
      : i18n.language === 'de' 
        ? "Über uns | ASAK – 30 Jahre Erfahrung in Bulgarien" 
        : "About Us | ASAK – 30 Years of Excellence in Bulgaria"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Научете повече за АСАК ЕООД и немската прецизност в София." :
    i18n.language === 'de' ? "Erfahren Sie mehr über ASAK und deutsches Know-how in Bulgarien." :
    "Learn more about ASAK and our 30 years of manufacturing experience in Sofia."
  } />
</Helmet>
      <HeaderASAK />
      
      <PageTitleContact
        
      />
        <Ueberuns 
        title="About Us"
        tagline="Part of your success"
    />
      <ContactDetails />

     

      <section className="pt-0 pb-0 map-section">
        <Map classAppend="wide" />
      </section>
      
      <FooterASAK />
    </Loader>
  );
}; // Hier die Klammer schließen

export default ContactSimple;
