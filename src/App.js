import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Pages

import Page404 from "./pages/others/Page404";
//import ComingSoon from "./pages/others/ComingSoon";
import ScrollToTop from "./helpers/ScrollToTop";
import ContatButtons from "./helpers/ContactButtons";
import asakhome from "./pages/asakhome";
import ContactASAK from "./pages/contact/ContactASAK.js"
import offers from "./pages/offers.js";
import spritzguss from "./pages/offers/spritzguss.js";
import formenbau from "./pages/offers/formenbau.js";
import ContactButtons from "./helpers/ContactButtons";

function App() {

  return (
    <Suspense fallback={<div>Loading....</div>}> 
    <Router basename={"/"}>
      <ScrollToTop>
        <ContactButtons></ContactButtons>
        <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={asakhome} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactASAK} />
        <Route exact path={`${process.env.PUBLIC_URL}/offers`} component={offers} />
        <Route exact path={`${process.env.PUBLIC_URL}/spritzguss`} component={spritzguss} />
        <Route exact path={`${process.env.PUBLIC_URL}/formenbau`} component={formenbau} />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
    </Suspense>
  );
}

export default App;
