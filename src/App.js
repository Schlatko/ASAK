import React, {Suspense} from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages

import Page404 from "./pages/others/Page404";
//import ComingSoon from "./pages/others/ComingSoon";
import ScrollToTop from "./helpers/ScrollToTop";
import ContatButtons from "./helpers/ContactButtons";
import Asakhome from "./pages/asakhome";
import ContactsASAK from "./pages/ContactsASAK.js"
import Offers from "./pages/offers.js";
import Spritzguss from "./pages/offers/spritzguss.js";
import Impressum from "./pages/offers/impressum.js";
import Formenbau from "./pages/offers/formenbau.js";
import Dbf from "./pages/offers/dbf.js";
import Montage from "./pages/offers/montage.js";
import Laser from "./pages/offers/laser.js";
import Prototypen from "./pages/offers/prototypen.js";
import ContactButtons from "./helpers/ContactButtons";
import Referenzen from "./pages/referenzen.js";
import Ueberuns from "./pages/ueberuns.js";
import Boxed2 from "./pages/portfolio/PortfolioWideTwo.js";


import ReactGA from 'react-ga';
ReactGA.initialize("G-0QZ3K396JQ");
ReactGA.pageview(window.location.pathname + window.location.search);

function App({ASAK, callback}) {

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <BrowserRouter basename={"/"}>
        <ScrollToTop>
          <Helmet>
            <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="dc5f3370-0340-4d54-adf8-21f967cc4e29" data-blockingmode="auto" type="text/javascript"></script>
          </Helmet>
          <ContactButtons />

          <Routes>
            {/* 1. Haupt-Route mit Sprach-Präfix */}
            <Route path="/:lang">

            <Route path="leistungen" element={<Offers />} />
<Route path="uslugi" element={<Offers />} />
<Route path="services" element={<Offers />} />
    
    {/* Spritzguss - 3 Namen, 1 Komponente */}
    <Route path="spritzguss" element={<Spritzguss />} />
    <Route path="shpritsovane" element={<Spritzguss />} />
    <Route path="injection-molding" element={<Spritzguss />} />

    {/* Laser - 3 Namen, 1 Komponente */}
    <Route path="laser" element={<Laser />} />
    <Route path="lazerno-ryazane" element={<Laser />} />
    <Route path="laser-cutting" element={<Laser />} />

    {/* Über uns */}
    <Route path="ueberuns" element={<Ueberuns />} />
    <Route path="za-nas" element={<Ueberuns />} />
    <Route path="about-us" element={<Ueberuns />} />

    {/* Formenbau */}
    <Route path="formenbau" element={<Formenbau />} />
    <Route path="izrabotka-na-matrici" element={<Formenbau />} />
    <Route path="mold-making" element={<Formenbau />} />

    {/* Referenzen */}
    <Route path="referenzen" element={<Referenzen />} />
    <Route path="referentsii" element={<Referenzen />} />
    <Route path="references" element={<Referenzen />} />

    {/* Prototypen / 3D-Druck */}
    <Route path="prototypen" element={<Prototypen />} />
    <Route path="3d-printirane" element={<Prototypen />} />
    <Route path="3d-printing" element={<Prototypen />} />

    {/* Kontakte */}
    <Route path="kontakt" element={<ContactsASAK />} />
    <Route path="kontakti" element={<ContactsASAK />} />
    <Route path="contact" element={<ContactsASAK />} />

    {/* Impressum */}
    <Route path="impressum" element={<Impressum />} />
    <Route path="legal-notice" element={<Impressum />} />

    {/* Fallback für falsche Unterseiten innerhalb der Sprache */}
    <Route path="*" element={<Page404 />} />
  

    
              <Route index element={<Asakhome />} />
          
           
              
              
             
            
              
              
              {/* Fallback für falsche Unterseiten in einer Sprache */}
              <Route path="*" element={<Page404 />} />
            </Route>

            {/* 2. Automatischer Redirect: Von domain.de/ auf domain.de/de/ weiterleiten */}
            <Route path="/" element={<Navigate to="/de" replace />} />

            {/* 3. Genereller 404 Fallback */}
            <Route path="*" element={<Page404 />} />
          </Routes>

        </ScrollToTop>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
