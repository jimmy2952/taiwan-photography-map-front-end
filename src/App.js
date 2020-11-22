import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import WeatherPage from "./weather/pages/WeatherPage";
import Carousel from "./carousel/Carousel";
import Upload from "./upload/Upload"
import LogIn from "./auth/LogIn"
import SignUp from "./auth/SignUp"
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
          <Route exact path="/" component={Carousel} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
