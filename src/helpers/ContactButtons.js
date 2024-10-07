import React, { useState, useEffect} from "react";
import Icofont from "react-icofont";
import { useTranslation } from "react-i18next";


const ContactButtons = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setIsMobile] = useState(false);
  const [show, setShow] = React.useState(false);
  const { t } = useTranslation('cont');

  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };


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
        className={"show"}
        title={t('tel')}
       
      >
    
      <i className="icofont-headphone-alt-2"></i>
      </a>
    
      <a
        href="mailto:info@asak-eu.com"
        id="contact2"
        className={"show"}
        title={t('mail')}
       
      >
      <i className="icofont-email"></i>
      </a>
      {children}
    </>
  );
};

export default ContactButtons;
