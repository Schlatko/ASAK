import React from "react";
import logoFooter from "../../assets/images/mainLogoASAKWhite.png";
import FooterCopyright from "./FooterCopyright";

import { useTranslation } from "react-i18next";


const FooterOne = () => 
{
  const { t } = useTranslation('footer');
    //  {t('header', {returnObjects: true}).map((dropdown, i)
    //{dataFeatures.map((feature, i) 
    //{t('header')}
    return (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
              
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-links">
                <h5 className="widget-title">{t('aname')}</h5>
                <ul>
                  <i className="icofont icofont-google-map"></i>
                    <a href="https://goo.gl/maps/rBw9DKxqfs63Hh1M8" target="_blank">
                    {t('adress')}
                    </a>
                 
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">{t('telname')}</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href={t('tellink')}>{t('tel')}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">{t('mailname')}</h5>
                <ul>
                  
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:info@asak-eu.com">
                    {t('mail')}
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "300px" }}></div>
  </>
);
}; 

export default FooterOne;
