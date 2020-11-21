import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import WeatherPage from "./weather/pages/WeatherPage";
import Carousel from "./carousel/Carousel";
import classes from "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main className="headerHeight">
        <Switch>
          <Route path="/weather" component={WeatherPage} />
          {/* <Route path="/portfolio" component={Portfolio} />
        <Route path="/map" component={Map} /> */}
          <Route exact path="/" component={Carousel} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
