import React, { Suspense, useEffect, useState  } from "react";
// import ReactWow from "react-wow";
import Icofont from "react-icofont";
import Loader from "../../components/Loader/Loader";
import mana from "../../assets/images/portfolio/grid/1.png";
import { preloadImage } from './preloadImage';

const PortfolioItem = ({
  title,
  category,
  image,
  links,
  space,
  groups,
  type,
  columns,
  openLightbox,


  
})  => {

  
    
    
      
  return (
    
  
      <div
        className={
          "portfolio-item col-md-" + 12/columns +
          (type === "product" ? " portfolio-masonry-item " : " ") +
          (space === "true" ? "gutter-space" : "no-gutter")
        }
        data-wow-delay="3s"
        data-groups={
          groups ? "[" + groups.map((val) => `"${val}"`) + "]" : null
        }
      >
        {/* <ReactWow animation="fadeIn"> */}
          <div
            className={
              "portfolio gallery-image-hover " +
              (type === "masonry" ? "portfolio-masonry-item" : "")
            }
          >
            <div className="dark-overlay"></div>
            <img src={require("../../assets/images/" + image)} width={1600} height={1200} alt="" />
           
            <div className="portfolio-wrap">
            
              <div className="portfolio-description">
                <h3 className="portfolio-title">{title}</h3>
                <a
                  
                  className="links"
                >
                  {category}
                </a>
              </div>
              <ul className="portfolio-details">
                <li>
                  <a
                    className="alpha-lightbox"
                    href="!#"
                    onClick={(e) => openLightbox(e, image)}
                  >
                    <Icofont icon="search-1" />
                  </a>
                </li>
               
                {/* <li>
                  <a href={require("../../assets/images/" + image)}>
                    <Icofont icon="link-alt" />
                  </a>
                </li>*/}
              </ul>
            </div> 
          </div>
        {/* </ReactWow> */}
      </div>
   
  
  );
};

export default PortfolioItem;
