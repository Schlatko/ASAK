import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import MegaDropdown from "./MegaDropdown";
import dataNav from "../../data/Navbar/navbar-data-asak.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const DropdownMenu = () => {

// className={"dropdown-toggle " + (dropdown.sub === true ? "nav-link" : "")}  
  useWindowResizeListener();

  
  const { t } = useTranslation('navbar-data-asak');
 // {dataNav.map((dropdown, i) => (
   //{t('navbar-data-asak', {returnObjects: true}).map((dropdown, i) => (
     // {t("dataNav.title")}
  const handleHover = (e) => {
    e.preventDefault();
    const width = window.innerWidth;
    if (width < 991) {
      const el = e.target;
      if (e.target.nextSibling) {
        if (el.parentElement.classList.contains("on")) {
          el.nextSibling.style.display = "none";
          el.parentElement.classList.remove("on");
          el.nextSibling.style.opacity = 0;
          el.nextSibling.classList.remove("fadeIn");
        } else {
          el.parentElement.classList.add("on");
          el.nextSibling.style.display = "block";
          el.nextSibling.style.opacity = 1;
          el.nextSibling.classList.add("fadeIn");
        }
      }
    }
  };

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
      {t('header', {returnObjects: true}).map((dropdown, i) => (
          <li
            className={
              "dropdown nav-item " + (dropdown.megaMenu === true ? "megamenu-fw" : "")
            }
            onClick={(e) => handleHover(e)}
            key={i}
          >
            <a href={'/'}  className={"nav-link " + (dropdown.sub === true ? "dropdown-toggle" : "")}  data-toggle="dropdown">
            <Link to={`${dropdown.link}`}>{dropdown.title}</Link>
              
              
            </a>
            {dropdown.sub ? (
              <DropdownItem
                item={dropdown.subMenu}
              />
            ) : (
            ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
