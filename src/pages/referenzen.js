import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "../components/Loader/Loader";
import Portfolio from "../components/Portfolio/Portfolio";
import HeroSliderTwo from "../components/Hero/HeroSliderTwo";

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
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";



const asakhome = () => {
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { t } = useTranslation('referenzen');
  return (
    <Loader>

    <HeaderASAK />
    <TitelASAK title={t('header')} tagline={t('sub')} />  
    <ClientsBrand />
    <Portfolio
        filter="true"
        layout="wide"
        columns="2"
        items="6"
        classAppend="pt-0"
      />

      <FooterASAK />
    </Loader>
  );
};

export default asakhome;
