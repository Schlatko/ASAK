import React, { useState, useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Portfolio from "../components/Portfolio/PortfolioASAK";

import ClientsBrand from "../components/ClientsBrand/ClientsBrand";




import FooterASAK from "../components/Footer/FooterASAK";
import HeaderASAK from "../components/Header/HeaderASAK";

import { useTranslation } from "react-i18next";

import TitelASAK from "../components/PageTitle/TitelASAK";
import { Helmet } from "react-helmet";




const asakhome = () => {
  const [toggler, setToggler] = useState(false);
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 

  const { t, i18n } = useTranslation('referenzen');
  return (
   
    <Suspense>
      <Helmet>
  <title>
  {i18n.language === 'bg' 
      ? "Референции и проекти | АСАК – Нашите клиенти" 
      : i18n.language === 'de' 
        ? "Referenzen & Projekte | ASAK – Unsere Erfolgsgeschichten" 
        : "References & Projects | ASAK – Our Case Studies"}
    
  </title>
  <meta name="description" content={
    i18n.language === 'en' 
      ? "Explore our manufacturing projects in automotive, medical, and electronics. Over 30 years of experience in Bulgaria." 
      : t('seo_desc')
  } />
</Helmet>

    <HeaderASAK />
    <TitelASAK title={t('title')} 
  tagline={t('tagline')}
  imageName="avtomatizirano-shpritsovane-plastmasi-asak.webp" // Der Name aus der Tabelle
  altText={t('alt_text')} // Den Alt-Text legst du in deinen i18n Dateien an
/> 
   <ClientsBrand/>
    <section className="pt-100 pt-100">
      <Portfolio filter="true" columns="2" layout="box" space="true"/>
    </section>

    

      <FooterASAK />
    </Suspense>
   
  );
};

export default asakhome;
