import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import MegaDropdown from "./MegaDropdown";
import dataNav from "../../data/Navbar/navbar-data-asak.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const DropdownMenuAsak = () => {
  const { t } = useTranslation('navbar-data-asak');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuData = t('header', { returnObjects: true });
  const items = Array.isArray(menuData) ? menuData : [];

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav flex items-center">
        {items.map((dropdown, i) => (
          <li
            key={i}
            className={`dropdown nav-item ${dropdown.megaMenu ? "megamenu-fw" : ""} ${activeDropdown === i ? "on" : ""}`}
            onMouseEnter={() => window.innerWidth > 991 && setActiveDropdown(i)}
            onMouseLeave={() => window.innerWidth > 991 && setActiveDropdown(null)}
          >
            <Link 
              to={dropdown.link} 
              className={`nav-link ${dropdown.sub ? "dropdown-toggle" : ""}`}
              onClick={(e) => {
                if (window.innerWidth < 992 && dropdown.sub) {
                  e.preventDefault();
                  setActiveDropdown(activeDropdown === i ? null : i);
                }
              }}
            >
              {dropdown.title}
            </Link>
            
            {dropdown.sub && activeDropdown === i && (
              <ul className="dropdown-menu block opacity-100 visible animate-in fade-in duration-200 shadow-xl border-t-2 border-blue-600">
                {dropdown.subMenu?.map((sub, idx) => (
                  <li key={idx}>
                    <Link to={sub.link} className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenuAsak;
