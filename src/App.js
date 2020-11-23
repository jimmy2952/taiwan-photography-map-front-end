import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import WeatherPage from "./weather/pages/WeatherPage";
import Carousel from "./carousel/Carousel";
import Upload from "./upload/Upload"
import LogIn from "./auth/LogIn"
import SignUp from "./auth/SignUp"
import Map from "./map/page/Map"
import CityDetail from "./cityDetail/page/CityDetail"
import ScapeDetail from "./cityDetail/page/ScapeDetail"
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main className="headerHeight">
        <Switch>
          <Route path="/weather" component={WeatherPage} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/photo/new" component={Upload} /> 
          <Route path="/map/:city/:scape" component={ScapeDetail} />
          <Route path="/map/:city" component={CityDetail} />
          <Route path="/map" component={Map} />
          <Route exact path="/" component={Carousel} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
