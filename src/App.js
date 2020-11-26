import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import WeatherPage from "./weather/pages/WeatherPage";
import Carousel from "./carousel/Carousel";
import Upload from "./upload/Upload";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import Map from "./map/page/Map";
import CityDetail from "./cityDetail/page/CityDetail";
import ScapeDetail from "./cityDetail/page/ScapeDetail";
import { useAuth } from "./shared/hook/auth-hook"
import { AuthContext } from "./shared/context/auth-context";
import "./App.css";

const App = () => {
  const { token, login, logout, userId } = useAuth()

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/weather" component={WeatherPage} />
        <Route path="/photo/new" component={Upload} />
        <Route path="/map/:city/:scape" component={ScapeDetail} />
        <Route path="/map/:city" component={CityDetail} />
        <Route path="/map" component={Map} />
        <Route exact path="/" component={Carousel} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/weather" component={WeatherPage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/map/:city/:scape" component={ScapeDetail} />
        <Route path="/map/:city" component={CityDetail} />
        <Route path="/map" component={Map} />
        <Route exact path="/" component={Carousel} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main className="headerHeight">{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
