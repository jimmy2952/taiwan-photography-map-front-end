import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner"
import { useAuth } from "./shared/hook/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
import "./App.css";

const WeatherPage = React.lazy(() => import("./weather/pages/WeatherPage"));
const Carousel = React.lazy(() => import("./carousel/Carousel"));
const Upload = React.lazy(() => import("./upload/Upload"));
const LogIn = React.lazy(() => import("./auth/LogIn"));
const SignUp = React.lazy(() => import("./auth/SignUp"));
const Map = React.lazy(() => import("./map/page/Map"));
const CityDetail = React.lazy(() => import("./cityDetail/page/CityDetail"));
const ScapeDetail = React.lazy(() => import("./cityDetail/page/ScapeDetail"));
const Discover = React.lazy(() => import("./discover/page/Discover"));
const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/weather" component={WeatherPage} />
        <Route path="/photo/new" component={Upload} />
        <Route path="/map/:city/:scape" component={ScapeDetail} />
        <Route path="/map/:city" component={CityDetail} />
        <Route path="/map" component={Map} />
        <Route path="/discover" component={Discover} />
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
        <Route path="/discover" component={Discover} />
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
        <main className="headerHeight">
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
