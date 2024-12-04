import React, { useState, useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "./../components/Loader/Loader";
import ReactGA from 'react-ga';

import HeroSliderTwo from "./asakhome/HeroSliderTwo";


import image from "../assets/images/backgroundTest2.jpeg";

import OurTeamThree from "../components/Team/OurTeamThree";

import FooterASAK from "../components/Footer/FooterASAK";
import HeaderASAK from "../components/Header/HeaderASAK";
import WhoWeAreThree from "../components/WhoWeAre/WhoWeAreThree";
import Spritzdetail from "../pages/offers/detail/spritzdetail";
import ContactDetails from "./contact/ContactDetails";
import Map from "../components/Maps/Gmap";
import OffersASAK from "../components/Services/Construction/OffersASAK";
import HomeOffers from "../components/Services/Construction/HomeOffers";

const asakhome = () => {
  ReactGA.pageview('/about/contact-us');
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "home"

  })
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Suspense>
  
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
