import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleContact from "../components/PageTitle/PageTitleContact";
import ContactDetails from "./contact/ContactDetails";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import FooterOne from "../components/Footer/FooterOne";
import HeaderASAK from "../components/Header/HeaderASAK";
import Map from "../components/Maps/Gmap";
import FooterASAK from "../components/Footer/FooterASAK";

const ContactSimple = () => (
    <Loader>
      <HeaderASAK />
      
      <PageTitleContact
        
      />
      <ContactDetails />
      <section className="pt-0 pb-0 map-section">
        <Map classAppend="wide" />
      </section>
      
      <FooterASAK />
    </Loader>
  );

export default ContactSimple;
