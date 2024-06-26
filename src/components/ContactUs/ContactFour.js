import React from "react";
import ContactFormSix from "./ContactFormSix";
import Icofont from "react-icofont";
import Map from "../Maps/Map";
import idea from "../../assets/images/backgroundIdea.svg"
import { useTranslation } from "react-i18next";



const ContactFour = () =>  {
const { t } = useTranslation('contact');
return (
    <>
      <section className="contact-us white-bg" id="contact">
        <div className="container">
          <div className="clearfix">
            <div className="bg-flex-right col-md-6 map-section">
              <img className=""src={idea}></img>
            </div>
            <div className="col-about-left col-md-6 text-left">
              <h2>{t('contact.header')}</h2>
              <h4 className="text-uppercase"></h4>
              <ContactFormSix />
            </div>
          </div>
        </div>
      </section>
      <section className="p-0">
        <div className="container-fluid">
          <div className="row row-flex">
            <div className="col-md-4">
              <div className="col-inner spacer dark-bg">
                <div className="text-center white-color">
                  <Icofont icon="google-map" className="font-50px white-icon" />
                  <h2>Adresse</h2>
                  <p>
                    Nikola Voynovski 27, <br />
                    1510 Sofia, Bulgarien
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-inner spacer gradient-bg">
                <div className="text-center white-color">
                  <Icofont icon="email" className="font-50px white-icon" />
                  <h2>Email Us</h2>
                  <p className="mb-0">hello@scoda.com</p>
                  <p>jobs@scoda.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-inner spacer dark-bg">
                <div className="text-center white-color">
                  <Icofont icon="iphone" className="font-50px white-icon" />
                  <h2>Call Us</h2>
                  <p className="mb-0">(+1) 613 555-0105</p>
                  <p>(+1) 613 555-0105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFour;
