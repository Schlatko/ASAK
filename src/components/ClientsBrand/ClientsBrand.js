import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useTranslation } from "react-i18next";
import clientsData from "../../data/BrandsSlider/clients-brand.json";

const ClientsBrand = ({ children, classAppend }) => {
  const { t } = useTranslation('referenzen');
  const settings = {
    className: "clients-brand-carousel",
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="pt-50 pb-50 white-bg">
      <div>
<h2 className="font-500 text-center">{t('outline')}</h2>

      </div>
      <div className="container">
        {children ? <div className="row">{children}</div> : null}
        <div className={"row " + (classAppend ? classAppend : null)}>
          {
            <Slider {...settings}>
              {clientsData.map((client) => (
                <div className="client-logo" key={client.id}>
                  <a href="www.amet.bg">
                  <img
                    className="img-fluid" width={200} height={200}
                    src={require("../../assets/images/" + client.image)}
                    alt={client.name}
                  />
                  </a>
                </div>
              ))}
            </Slider>
          }
        </div>
      </div>
    </section>
  );
};

export default ClientsBrand;
