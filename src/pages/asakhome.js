import React, { useState, useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "./../components/Loader/Loader";
import ReactGA from 'react-ga';

import HeroSliderTwo from "./asakhome/HeroSliderTwo";




import OurTeamThree from "../components/Team/OurTeamThree";

import FooterASAK from "../components/Footer/FooterASAK";
import HeaderASAK from "../components/Header/HeaderASAK";
import WhoWeAreThree from "../components/WhoWeAre/WhoWeAreThree";
import Spritzdetail from "../pages/offers/detail/spritzdetail";
import ContactDetails from "./contact/ContactDetails";
import Map from "../components/Maps/Gmap";
import OffersASAK from "../components/Services/Construction/OffersASAK";
import HomeOffers from "../components/Services/Construction/HomeOffers";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const asakhome = () => {
  ReactGA.pageview('/about/contact-us');
  ReactGA.send({
    hitType: " ",
    page: "/",
    title: "home"

  })
  const { t, i18n } = useTranslation('');
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Suspense>
      <Helmet>
      
  <title>
    {i18n.language === 'bg' 
      ? "АСАК ЕООД | Шприцоване на пластмаси и производство на матрици София" 
      : i18n.language === 'de' 
        ? "ASAK EOOD | Spritzguss & Formenbau in Bulgarien – Präzision seit 1990" 
        : "ASAK EOOD | Injection Molding & Mold Making in Bulgaria – Precision Manufacturing"}
  </title>
  <meta name="description" content={
    i18n.language === 'bg' ? "Вашият партньор за висококачествено шприцоване, металообработка и инструментална екипировка в София. Немско качество от АСАК." :
    i18n.language === 'de' ? "Ihr Spezialist für Kunststoff-Spritzguss und Werkzeugbau in Sofia. Wir liefern Präzisionsteile für Industrie und Technik nach deutschem Standard." :
    "Leading manufacturer in Bulgaria for plastic injection molding and tool making. High-quality industrial solutions and precision engineering since 1990."
  } />

<link rel="alternate" hreflang="de" href="https://asak-bg.com/de" />
<link rel="alternate" hreflang="bg" href="https://asak-bg.com/bg" />
<link rel="alternate" hreflang="en" href="https://asak-bg.com/en" />
<link rel="alternate" hreflang="x-default" href="https://asak-bg.com/bg" />
</Helmet>
  
      <HeaderASAK />
      
      <HeroSliderTwo/>  
      
      <HomeOffers></HomeOffers>
     
      
      
     
      {/* <OurTeamThree />*/} 
      <ContactDetails />
      <section className="pt-0 pb-0 map-section">
        <Map classAppend="wide" />
      </section>

      <FooterASAK />
    </Suspense>
  );
};

export default asakhome;
