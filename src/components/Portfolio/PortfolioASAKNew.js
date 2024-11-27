import React, { useEffect, useRef, useState, forwardRef,Suspense } from "react";
import dataPortfolio from "../../data/Portfolio/creative-agency-data.json";
import PortfolioFilter from "../../elements/Portfolio/PortfolioFilter";
import PortfolioItem from "./PortfolioItemASAK";
import Loader from "../Loader/Loader";
import Shuffle from "shufflejs";
import "react-image-lightbox/style.css";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox"

const PortfolioASAKNew = forwardRef(
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
      console.log('closeLightboxHit');
      console.log(isOpen);
    };
    const openLightbox = (e, photo) => {
      console.log(e);
      e.preventDefault();
      setPhoto(photo);
      setIsOpen(true);
      console.log(photo)
      console.log(isOpen);
      console.log('OpenLightBox');
    };

    return (
     
        
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
             {/*   {filter === "true" ? (
                <PortfolioFilter
                  categories={categories}
                  handleClick={filterElements}
                />
              ) : null}*/} 
              
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
              <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "/image1x3840.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/image1x320.jpg", width: 320, height: 213 },
              { src: "/image1x640.jpg", width: 640, height: 427 },
              { src: "/image1x1200.jpg", width: 1200, height: 800 },
              { src: "/image1x2048.jpg", width: 2048, height: 1365 },
              { src: "/image1x3840.jpg", width: 3840, height: 2560 },
            ],
          },
          // ...
        ]}
      />
            </div>
          </div>
        </div>
      </section>
      
  
   );
  }
 
);

export default PortfolioASAKNew;
