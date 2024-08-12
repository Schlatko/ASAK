import React, {Suspense} from "react";
//import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import App from "./App";
import './i18n';
import { StrictMode } from 'react';

//ReactDOM.render( <App />, document.getElementById("main"));
const container = document.getElementById("main");
const root = createRoot(container);
root.render( <StrictMode>
    <App />
  </StrictMode>
);

