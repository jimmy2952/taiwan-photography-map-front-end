import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import WeatherPage from "./weather/pages/WeatherPage";
import classes from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main className={classes.App}>
        <Switch>
          <Route path="/weather" component={WeatherPage} />
          {/* <Route path="/portfolio" component={Portfolio} />
        <Route path="/map" component={Map} />
        <Route exact path="/" component={Carousel} /> */}
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
