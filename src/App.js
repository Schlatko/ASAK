import React, {Suspense} from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


// Pages

import Page404 from "./pages/others/Page404";
//import ComingSoon from "./pages/others/ComingSoon";
import ScrollToTop from "./helpers/ScrollToTop";
import ContatButtons from "./helpers/ContactButtons";
import Asakhome from "./pages/asakhome";
import ContactsASAK from "./pages/ContactsASAK.js"
import Offers from "./pages/offers.js";
import Spritzguss from "./pages/offers/spritzguss.js";
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
const TRACKING_ID = "G-0QZ3K396JQ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App({ASAK, callback}) {

  return (
    <Suspense fallback={<div>Loading....</div>}> 
    <BrowserRouter basename={"/"}>
    <ScrollToTop>
        <ContactButtons></ContactButtons>
        <Routes>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Asakhome/>} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} element={<ContactsASAK/>} />
        <Route exact path={`${process.env.PUBLIC_URL}/offers`} element={<Offers/>} />
        <Route exact path={`${process.env.PUBLIC_URL}/spritzguss`} element={<Spritzguss></Spritzguss>} />
        <Route exact path={`${process.env.PUBLIC_URL}/formenbau`} element={<Formenbau></Formenbau>} />
        <Route exact path={`${process.env.PUBLIC_URL}/referenzen`} element={<Referenzen></Referenzen>} />
        <Route exact path={`${process.env.PUBLIC_URL}/prototypen`} element={<Prototypen></Prototypen>} />
        <Route exact path={`${process.env.PUBLIC_URL}/dbf`} element={<dbf></dbf>} />
        <Route exact path={`${process.env.PUBLIC_URL}/laser`} element={<laser></laser>} />
        <Route exact path={`${process.env.PUBLIC_URL}/montage`} element={<montage></montage>} />
        <Route exact path={`${process.env.PUBLIC_URL}/ueberuns`} element={<ueberuns></ueberuns>} />
        <Route exact path={`${process.env.PUBLIC_URL}/boxed2`} element={<boxed2></boxed2>} />
          <Route element={<Page404></Page404>} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
