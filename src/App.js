import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Pages

import Page404 from "./pages/others/Page404";
//import ComingSoon from "./pages/others/ComingSoon";
import ScrollToTop from "./helpers/ScrollToTop";
import asakhome from "./pages/asakhome";
import ContactASAK from "./pages/contact/ContactASAK.js"

function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={asakhome} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactASAK} />
        
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
