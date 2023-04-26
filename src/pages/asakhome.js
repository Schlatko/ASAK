import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "./../components/Loader/Loader";
import dataSlider from "../data/Slider/seo-agency-data.json";
import HeaderOne from "../components/Header/HeaderASAK";
import HeroSliderTwo from "../components/Hero/HeroSliderTwo";
import WhoWeAreFive from "../components/WhoWeAre/WhoWeAreFive";
import AboutUsTwo from "../components/AboutUs/AboutUsTwo";
import image from "../assets/images/backgroundTest2.jpeg";
import CounterTwo from "../components/Counters/CounterTwo";
import OurTeamThree from "../components/Team/OurTeamThree";
import PriceTablesThree from "../components/PriceTables/PriceTablesThree";
import BlogSlider from "../components/Blog/BlogSlider";
import TestimonialsOne from "../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import FooterOne from "../components/Footer/FooterOne";
import HeaderASAK from "../components/Header/HeaderASAK";
import WhoWeAreThree from "../components/WhoWeAre/WhoWeAreThree";
import Portfolio from "../components/Portfolio/Portfolio";

const asakhome = () => {
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={image}
      />
      <HeaderASAK />
      <HeroSliderTwo data={dataSlider} />
      <WhoWeAreThree />
      <Portfolio
        filter="true"
        layout="wide"
        columns="2"
        items="6"
        classAppend="pt-0"
      />
      <OurTeamThree />

      <FooterOne />
    </Loader>
  );
};

export default asakhome;
