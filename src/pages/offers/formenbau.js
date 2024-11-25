import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import FooterASAK from "../../components/Footer/FooterASAK";
import HeaderASAK from "../../components/Header/HeaderASAK";
import FormenServices from "./detail/FormenServices";
import FormenServicesLeft from "./detail/FormenServicesLeft";
import FormenServicesAuswerfer from "./detail/FormenServicesAuswerfer";
import TitelASAKFormenbau from "../../components/PageTitle/TitelASAKFormenbau";
import Spritzdetail from "./detail/spritzdetail";
import UebersichtSpritz from "../../components/WhoWeAre/UebersichtSpritz";
import FactsFormenbauKomplett from "../../components/FunFacts/FactsFormenbauKomplett";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import FormenbauKomplett from "../../components/WhoWeAre/FormenbauKomplett";
import OffersASAK from "../../components/Services/Construction/OffersASAK";
import material from "../../assets/images/Formenbau/matr1.jpg";
import schieber from "../../assets/images/Formenbau/Schieber.png";
import duesen from "../../assets/images/Formenbau/matr2.jpg";
import { useTranslation } from "react-i18next";
import ContactDetails from "../contact/ContactDetails";

//

const spritzguss = () => {
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const { t } = useTranslation('formenbau');

    return (
      <Loader>

        <HeaderASAK />
        <TitelASAKFormenbau title={t('header')} tagline={t('tagline')} />
        <FormenbauKomplett></FormenbauKomplett>
       {/* <FactsFormenbauKomplett title={t('facttitle')} tagline={t('factsub')}>
        {t('facttext')}</FactsFormenbauKomplett>*/}
        <FormenServices
        title={t('header2')}
        tagline={t('sub2')}
        serviceImg={material}
      />
      <FormenServicesLeft
        title={t('header3')}
        tagline={t('sub3')}
        serviceImg={duesen}
      />
      
      
      <ContactDetails />
        <FooterASAK/>
      </Loader>
    );
  };
  
  export default spritzguss;
  