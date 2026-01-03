import React, { useState, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import DropdownMenuAsak from "../Navs/DropdownMenuAsak";


import MainLogo from "../MainLogo";

import LanguageSelector from "../../elements/LanguageSelector"

import { useTranslation } from "react-i18next";


const HeaderAsak = ({ type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const { t } = useTranslation('navbar-data-asak');

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const showSearchForm = (e) => { 
    e.preventDefault();
    setShow(true);
    resizeForm();
  };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };


  useEffect(() => {

    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);


  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full " +
          (fixed || type === "white" ? "" : "navbar-white")
        }
      >
        
        <div className="container">
          
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <Icofont icon="navigation-menu" />
          </button>
          <MainLogo showMenu={showMenu} />
  
          <DropdownMenuAsak />
         
            
            
          <LanguageSelector></LanguageSelector>
            
            
          
          
        </div>
      </nav>
    </>
  );
};

export default HeaderAsak;
