import React, { useState, useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "../components/Loader/Loader";
import Portfolio from "../components/Portfolio/PortfolioASAK";
import HeroSliderTwo from "../components/Hero/HeroSliderTwo";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import image from "../assets/images/backgroundTest2.jpeg";

import OurTeamThree from "../components/Team/OurTeamThree";

import FooterASAK from "../components/Footer/FooterASAK";
import HeaderASAK from "../components/Header/HeaderASAK";
import WhoWeAreThree from "../components/WhoWeAre/WhoWeAreThree";
import Spritzdetail from "./offers/detail/spritzdetail";
import { useTranslation } from "react-i18next";
import OffersASAK from "../components/Services/Construction/OffersASAK";
import HomeOffers from "../components/Services/Construction/HomeOffers";
import TitelASAK from "../components/PageTitle/TitelASAK";




const asakhome = () => {
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { t } = useTranslation('referenzen');
  return (
    <Suspense fallback={<div>Loading....</div>}> 
    <Loader>
      

    <HeaderASAK />
    <TitelASAK title={t('header')} tagline={t('sub')} />  
   <ClientsBrand/>
    <section className="pt-100 pt-100">
      <Portfolio filter="true" columns="2" layout="box" space="true"/>
    </section>

    

      <FooterASAK />
    </Loader>
    </Suspense>
  );
};

export default asakhome;
