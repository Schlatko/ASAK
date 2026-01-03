import React from "react";
import dataSocial from "../../data/Social/social-footer.json";
import Icofont from "react-icofont";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";




const FooterCopyright = (() => {
  const { t, i18n } = useTranslation('footer');

return (
  <div className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <ul className="social-media">
            {dataSocial.filter((v,i) => i < 5).map((item) => (
              <li key={item.id}>
                <a href={item.link}>
                  <Icofont icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4 col-xs-12">
          <div className="copy-right text-right">
            © 2024 ASAK EooD
          </div>
        </div>
        <div className="col-md-4 col-xs-12">
          
        <Link 
  className="readmore" 
  to={`/${i18n.language}/impressum`}
>
  {t('link')}
</Link>
         
        </div>
      </div>
    </div>
  </div>
);
});

export default FooterCopyright;
