import React from "react";
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.css';
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
import {
  EffectFade,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useTranslation } from "react-i18next";

//SwiperCore.use([EffectFade, Navigation, Autoplay, Pagination]);
const HeroSliderTwo = () => {
  const params = {
    loop: true,
    grabCursor: true,
    navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
    },
    rebuildOnUpdate: true,
   // autoplay: {
     // delay: 8000,
      //disableOnInteraction: true,
    //},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  const { t } = useTranslation('slider');

  return (
    <section className="pt-0 pb-0">
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper modules={[EffectFade, Navigation, Autoplay, Pagination]} observer observeParents {...params}>
          {t('slider', {returnObjects: true}).map((slide) => (
              <li key={slide.id}>
                <div
                  className="slide-img"
                  style={{
                    background: `url(${require("../../assets/images/" +
                      slide.image)}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className={
                    "hero-text-wrap " + (slide.bg ? "gradient-overlay-bg" : "")
                  }
                >
                  <div className="hero-text white-color">
                    <div className="container text-center">
                      <h3 className="white-color font-400">
                          {slide.tagline ? slide.tagline : ""}
                        </h3>
                        <h1 className="white-color text-uppercase font-700 letter-spacing-5">
                          {slide.title}
                        </h1>
                      <h3 className="white-color font-400">
                        {slide.text ? parse(slide.text) : ""}
                      </h3>
                      {slide.buttons.length !== 0 ? (
                        <p className="text-center mt-30">
                          <SliderButtons buttons={slide.buttons} />
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default HeroSliderTwo;
