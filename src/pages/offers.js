import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../components/Loader/Loader";
import FooterASAK from "../components/Footer/FooterASAK";
import HeaderASAK from "../components/Header/HeaderASAK";
import TitelASAK from "../components/PageTitle/TitelASAK";

import OffersASAK from "../components/Services/Construction/OffersASAK";
import { useTranslation } from "react-i18next";





const offers = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('offershead');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAK title={t('header')} tagline={t('sub')} />
        <OffersASAK />
  
        <FooterASAK />
      </Loader>
    );
  };
  
  export default offers;
  