import React, { useState, useEffect} from "react";
import Icofont from "react-icofont";
const ContactButtons = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(true);
      }
    };
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    };

  



    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
        }, [scrolled]);
        
        
    useEffect(() => {
           
            const handleResize = () => {
                if (window.innerWidth < 720) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            };
        
            window.addEventListener("resize", handleResize, { passive: true });
        
            return () => window.removeEventListener("resize", handleResize);
                }, [mobile]);

  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a 
        href="tel:+4915111682642"
        id="contact"
        className={scrolled ? "show" : ""}
        title="Rufen Sie uns an"
      
      >
    
      <i class="icofont-headphone-alt-2"></i>
      </a>
    
      <a
        href="info@asak-eu.com"
        id="contact2"
        className={scrolled ? "show" : "" }
        title="Schreiben Sie uns eine Mail"
       
      >
      <i class="icofont-email"></i>
      </a>
      {children}
    </>
  );
};

export default ContactButtons;
