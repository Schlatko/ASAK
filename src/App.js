import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Pages

import Page404 from "./pages/others/Page404";
//import ComingSoon from "./pages/others/ComingSoon";
import ScrollToTop from "./helpers/ScrollToTop";
import ContatButtons from "./helpers/ContactButtons";
import asakhome from "./pages/asakhome";
import ContactsASAK from "./pages/ContactsASAK.js"
import offers from "./pages/offers.js";
import spritzguss from "./pages/offers/spritzguss.js";
import formenbau from "./pages/offers/formenbau.js";
import dbf from "./pages/offers/dbf.js";
import montage from "./pages/offers/montage.js";
import laser from "./pages/offers/laser.js";
import prototypen from "./pages/offers/prototypen.js";
import ContactButtons from "./helpers/ContactButtons";
import referenzen from "./pages/referenzen.js";
import ueberuns from "./pages/ueberuns.js"
import boxed2 from "./pages/portfolio/PortfolioWideTwo.js"
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min.js";

function App() {

  return (
    <Suspense fallback={<div>Loading....</div>}> 
    
      <ScrollToTop>
        <ContactButtons></ContactButtons>
        <HashRouter>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={asakhome} />
        <Route path={`/contact`} component={ContactsASAK} />
        <Route path={`/offers`} component={offers} />
        <Route path={`/spritzguss`} component={spritzguss} />
        <Route path={`/formenbau`} component={formenbau} />
        <Route path={`/referenzen`} component={referenzen} />
        <Route path={`/prototypen`} component={prototypen} />
        <Route path={`/dbf`} component={dbf} />
        <Route path={`/laser`} component={laser} />
        <Route path={`/montage`} component={montage} />
        <Route path={`/ueberuns`} component={ueberuns} />
        <Route path={`/boxed2`} component={boxed2} />
          <Route component={Page404} />
        </HashRouter>
      </ScrollToTop>
   
    </Suspense>
  );
}

export default App;
