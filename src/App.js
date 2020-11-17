import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation"

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Switch>
        {/* <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/map" component={Map} />
        <Route exact path="/" component={Carousel} /> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
