import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/LandingPage/LandingPage";
import Home from "./components/HomePage/HomePage";
import Detail from "./components/DetailPage/DetailPage";
import Form from "./components/FormPage/FormPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/home" component={Home} />
    <Route path="/detail/:pokemonId" component={Detail} />
    <Route path="/form" component={Form} />
  </Switch>
);

export default Routes;
