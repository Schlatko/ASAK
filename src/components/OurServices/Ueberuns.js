import React from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";
import { useTranslation } from "react-i18next";

const Ueberuns = () => {
  const { t, i18n } = useTranslation('ueberuns');

  return(
  <section className="white-bg">
   
    <div className="container">
      
      <div>
          {/* H2 ist hier perfekt, da die H1 schon oben im PageTitle ist */}
          <h2 className="font-700">
  {i18n.language === 'bg' && "Вашият партньор за шприцоване и матрици"}
  {i18n.language === 'de' && "Ihr Partner für Spritzguss und Formenbau"}
  {i18n.language === 'en' && "Your Partner for Injection Molding and Mold Making"}
</h2>
          
          <h4 className="mt-10 line-height-26 default-color" style={{color: '#28a745'}}>
            {t('tagline')}
          </h4>
        <p className="mt-20">
        {t('text1')}
        </p>
        <p>
        {t('text2')}
        </p>
        <p>
        {t('text3')}
        </p>
        <p>
        {t('text4')}
        </p>
        
      
      </div>
    </div>
  </section>
);
};

export default Ueberuns;
