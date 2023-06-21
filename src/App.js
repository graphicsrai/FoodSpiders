import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavComp from "./components/NavComp";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FoodDetail from "./components/FoodDetail";

export default function App() {
  return (
    <BrowserRouter>
      <NavComp />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fooddetail:id">
          <FoodDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
