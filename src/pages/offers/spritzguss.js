import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import TitelASAK from "../../components/PageTitle/TitelASAK";
import Spritzdetail from "../offers/detail/spritzdetail";
import SpritzServices from "./detail/SpritzServices";
import SpritzServicesLeft from "./detail/SpritzservicesLeft";
import SpritzServices2 from "./detail/SpritzServices2";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsSpritzKomplett from "../../components/FunFacts/FactsSpritzKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import SpritzKomplett from "../../components/WhoWeAre/SpritzKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import { useTranslation } from "react-i18next";
import spritzmaschine from "../../assets/images/Spritzguss/spritz1.jpg";
import spritzmaschine2 from "../../assets/images/Spritzguss/spritz2.jpg";
import spritzmaschine3 from "../../assets/images/Spritzguss/spritz3.jpg";




const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('spritzguss');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAK title={t('header')} tagline={t('sub')} />
        <SpritzKomplett></SpritzKomplett>
        
      <SpritzServices
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine}
      />
      <SpritzServicesLeft
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine2}
      />
      <SpritzServices2
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={spritzmaschine3}
      />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  