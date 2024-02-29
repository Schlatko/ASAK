import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import ProtoServices from "./detail/ProtoServices";
import TitelASAKProto from "../../components/PageTitle/TitelASAKProto";
import Spritzdetail from "./detail/spritzdetail";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsFormenbauKomplett from "../../components/FunFacts/FactsFormenbauKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import PrototypenKomplett from "../../components/WhoWeAre/PrototypenKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import serviceOneImg from "../../assets/images/Prototypen/3DVorteile.png";
import { useTranslation } from "react-i18next";
import ContactDetails from "../contact/ContactDetails";




const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('prototypen');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAKProto title={t('header')} tagline={t('sub')} />
        <PrototypenKomplett></PrototypenKomplett>
        <ProtoServices
        /*title="Technologien"
    tagline="Was wir zu bieten haben."*/
        serviceImg={serviceOneImg}
      />
       <ContactDetails />
        
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  