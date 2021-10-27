import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route } from "react-router-dom";

const rootEl = document.getElementById("root");

const render = (App) => {
  ReactDom.render(
    <React.Fragment>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </React.Fragment>,
    rootEl
  );
};

render(App);
