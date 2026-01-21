import React from "react";
import Swiper from "react-id-swiper";
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
import {
  EffectFade,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
// Falls swiper-bundle.css nicht gefunden wird, kann alternativ 'swiper/css/bundle' probiert werden
import 'swiper/swiper-bundle.css';
import { useTranslation } from "react-i18next";

/**
 * HeroSliderTwo - Optimierte Version für bessere Performance (LCP)
 * Behebt Build-Fehler bei dynamischen Pfaden und optimiert das Laden der Bilder.
 */
const HeroSliderTwo = () => {
  const params = {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    rebuildOnUpdate: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const { t } = useTranslation('slider');
  
  // Sicherstellen, dass die Daten geladen sind
  const slidesData = t('slider', { returnObjects: true });
  const slides = Array.isArray(slidesData) ? slidesData : [];

  return (
    <section className="pt-0 pb-0">
      <div className="slider-bg flexslider">
        <ul className="slides">
          {slides.length > 0 && (
            <Swiper 
              modules={[EffectFade, Navigation, Autoplay, Pagination]} 
              observer 
              observeParents 
              {...params}
            >
              {slides.map((slide, index) => {
                const isFirstSlide = index === 0;
                
                // Behebung des dynamischen require Fehlers: 
                // Wir versuchen das Bild zu laden, fangen Fehler aber ab
                let slideImgSrc = "";
                try {
                  slideImgSrc = require(`../../assets/images/${slide.image}`);
                } catch (e) {
                  // Fallback Pfad, falls require fehlschlägt
                  slideImgSrc = `/static/media/${slide.image}`;
                }

                return (
                  <li key={slide.id || index} className="relative overflow-hidden ">
                    
                    {/* PERFORMANCE-OPTIMIERTES BILD */}
                    <div className="slide-img">
                      <img
                        src={slideImgSrc}
                        alt={slide.alt || "ASAK Industrie Bild"}
                        // Höchste Priorität für das allererste Bild (LCP Fix)
                        fetchpriority={isFirstSlide ? "high" : "auto"}
                        // Erstes Bild sofort laden, Rest verzögert
                        loading={isFirstSlide ? "eager" : "lazy"}
                        decoding={isFirstSlide ? "sync" : "async"}
                  
                        style={{ 
                          filter: "brightness(0.45)", // Abdunkelung für bessere Text-Lesbarkeit
                          transition: "filter 0.3s ease", 
                          minWidth: '100%', 
                          minHeight: '100%',
                           objectFit: 'cover',
                           
                          objectPosition: 'center center'   
                        }}
                      />
                    </div>

                    {/* TEXT INHALT */}
                    <div className={`hero-text-wrap relative z-10 w-full ${slide.bg ? "gradient-overlay-bg" : ""}`}>
                      <div className="hero-text white-color">
                        <div className="container text-center">
                          <h3 className="white-color font-400 drop-shadow-md">
                            {slide.tagline ? slide.tagline : ""}
                          </h3>
                          <h1 className="white-color text-uppercase font-500 letter-spacing-2 text-3xl md:text-5xl lg:text-7xl mb-4 drop-shadow-lg">
                            {slide.title}
                          </h1>
                          <h3 className="white-color font-400 mb-8 max-w-3xl mx-auto drop-shadow-md">
                            {slide.text ? parse(slide.text) : ""}
                          </h3>
                          {slide.buttons && slide.buttons.length > 0 && (
                            <div className="text-center mt-30">
                              <SliderButtons buttons={slide.buttons} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </Swiper>
          )}
        </ul>
      </div>
    </section>
  );
};

export default HeroSliderTwo;