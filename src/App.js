import React, {Suspense} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";


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

function App() {

  return (
    <Suspense fallback={<div>Loading....</div>}> 
    <Router basename={"/"}>
      <ScrollToTop>
        <ContactButtons></ContactButtons>
        <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={asakhome} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactsASAK} />
        <Route exact path={`${process.env.PUBLIC_URL}/offers`} component={offers} />
        <Route exact path={`${process.env.PUBLIC_URL}/spritzguss`} component={spritzguss} />
        <Route exact path={`${process.env.PUBLIC_URL}/formenbau`} component={formenbau} />
        <Route exact path={`${process.env.PUBLIC_URL}/referenzen`} component={referenzen} />
        <Route exact path={`${process.env.PUBLIC_URL}/prototypen`} component={prototypen} />
        <Route exact path={`${process.env.PUBLIC_URL}/dbf`} component={dbf} />
        <Route exact path={`${process.env.PUBLIC_URL}/laser`} component={laser} />
        <Route exact path={`${process.env.PUBLIC_URL}/montage`} component={montage} />
        <Route exact path={`${process.env.PUBLIC_URL}/ueberuns`} component={ueberuns} />
        <Route exact path={`${process.env.PUBLIC_URL}/boxed2`} component={boxed2} />
          
        </Switch>
      </ScrollToTop>
    </Router>
    </Suspense>
  );
}

export default App;
