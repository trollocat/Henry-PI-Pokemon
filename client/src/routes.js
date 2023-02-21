import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/LandingRoute/LandingRoute";
import Home from "./components/HomeRoute/HomeRoute";
import Submit from "./components/SubmitRoute/SubmitRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/home" component={Home} />
    <Route path="/detail/:pokemonId" component={Home} />
    <Route path="/submit" component={Submit} />
  </Switch>
);

export default Routes;
