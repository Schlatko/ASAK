import React, { forwardRef } from "react";
import dataServices from "../../../data/Services/our-services-two.json";
import { useTranslation } from "react-i18next";
import ServiceBox from "../../../components/OurServices/ServiceBoxSpritz";

const FormenServices = forwardRef(({ serviceImg, title, tagline }, ref) => {
  const { t } = useTranslation('impressum');

return (
  
  <section className="white-bg" id="service" ref={ref}>
    <div className="container">
        <h2
          className="font-700"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={1000}
        >
          {t('title')}
        </h2>
        </div>
  <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('adname')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('fname')} <br/> {t('fstr')} <br/> {t('fstd')} <br/> {t('fland')}

          
        </h3>
        </div>
        </div>
        </div>
        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('ceo')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
           {t('ceoname')}

          
        </h3>
        </div>
        </div>
        </div>
        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('emailn')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('email')}

          
        </h3>
        </div>
        </div>
        </div>

        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('register')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
        {t('registern')}

          
        </h3>
        </div>
        </div>
        </div>
        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('regnon')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
       {t('regno')}

          
        </h3>
        </div>
        </div>
        </div>
        
          
        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('taxid')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('taxids')}

          
        </h3>
        </div>
        </div>
        </div>
   
        <div className="container">
        <h2
          className="font-700"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={1000}
        >
         {t('datenschutz')}
        </h2>
        
        <h3>
        
        </h3>
        <h4>
        
        </h4>
        </div>
        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('dser')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
        {t('dserk')}
          
        </h4>
        </div>
        </div>
        </div>

        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
            {t('aufs')}
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <div className="container">
        <div className="row">
        <div className="col-md-3 col-sm-3 ">
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('aufsn')}
         <br/>
         {t('aufsad')}
         <br/>
         {t('aufstel')}<br/>
         {t('aufsm')}<br/>
         {t('aufsweb')}<br/>
          
        </h4>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('aufsk')} <br/> {t('aufad')} <br/>{t('auftel')}<br/> {t('aufma')} <br/> {t('aufweb')}
          
        </h4>

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {t('daten')} 
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('datent')} 

          
        </h4>
        </div>
        </div>
        </div>

        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
{t('datenw')}        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
        {t('datenwt')} 
          
        </h4>
        </div>
        </div>
        </div>
        <div className="container">
      <div className="row">
      <div className="col-md-3 col-sm-3 ">
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('datenae')} 
        </h3>
        </div>
        <div className="col-md-9 col-sm-9 ">
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('datenaet')} 
          
        </h4>
        </div>
        </div>
        </div>
        <div className="container">
     
        <h3
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
         {t('datenf')} 
          
        </h3>
        </div>
        
        
     
    
  </section>
  );
});

export default FormenServices;
