import React, { useEffect, useRef, useState, forwardRef,Suspense } from "react";
import dataPortfolio from "../../data/Portfolio/creative-agency-data.json";
import PortfolioFilter from "../../elements/Portfolio/PortfolioFilter";
import PortfolioItem from "./PortfolioItemASAK";
import Loader from "../../components/Loader/Loader";
import Shuffle from "shufflejs";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import { useTranslation } from "react-i18next";

const Portfolio = forwardRef(
  ({ filter, layout, columns, space, items, classAppend, children }, ref) => {
    const categories = ["übersicht", "spritzguss", "formenbau", "lasergravierung"];
    const element = useRef();
    const [shuffle, setShuffle] = useState();
    const { t } = useTranslation('portfolio');

   useEffect(() => {
      if (element.current) {
        setShuffle(
          new Shuffle(element.current, {
            itemSelector: ".portfolio-item",
          })
        );
      }
      
    }, []);

    const filterElements = (evt) => {
      const btn = evt.currentTarget;
      evt.target.parentElement
        .querySelectorAll(".active")
        .forEach((e) => e.classList.remove("active"));
      evt.currentTarget.classList.add("active");
      const cat = btn.getAttribute("value");
      shuffle.filter((element) => {
        return element.getAttribute("data-groups").toLowerCase().includes(cat);
      });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState(0);

    const closeLightbox = () => {
      setIsOpen(false);
    };
    const openLightbox = (e, photo) => {
      e.preventDefault();
      setPhoto(photo);
      setIsOpen(true);
    };

    return (
      <Suspense fallback={<div>Loading....</div>}> 
        
      <section
        className={"pb-0 pt-3" + (classAppend ? classAppend : "")}
        id="work"
        ref={ref}
      >
        {children ? (
          <div className="container">
            <div className="row">{children}</div>
          </div>
        ) : null}
        <div className={"container" + (layout === "wide" ? "-fluid" : "")}>
          <div className="row">
            <div className={"container" + (layout === "wide" ? "-fluid" : "") + " text-center"}>
              {filter === "true" ? (
                <PortfolioFilter
                  categories={categories}
                  handleClick={filterElements}
                />
              ) : null}
              
              <div
                id="portfolio-grid"
                ref={element}
                className="hover-two row"
              >
                {items
                  ? // dataPortfolio
                  t('items', {returnObjects: true})
                      .filter((v, i) => i < items)  
                      .map((item, i) => (
                        <PortfolioItem
                          key={item.id}
                          title={item.title}
                          category={item.category}
                          image={item.image}
                          groups={item.groups}
                          space={space ? "true" : "false"}
                          columns={columns}
                          openLightbox={openLightbox}
                        />
                      ))
                  : t('items', {returnObjects: true}).map((item, i) => (
                      <PortfolioItem
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        groups={item.groups}
                        space={space ? "true" : "false"}
                        columns={columns}
                        openLightbox={openLightbox}
                      />
                    ))}
              </div>
              {isOpen && (
                <Lightbox
                  mainSrc={require("../../assets/images/" + photo)}
                  onCloseRequest={() => closeLightbox()}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      </Suspense>
   );
  }
 
);

export default Portfolio;
