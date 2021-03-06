/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoutes";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";
import LogoutPage from "./pages/LogoutPage";
import LoginContext from "./utils/LoginContext";
import Navbar from "./components/Navbar/Navbar";
import WeatherContext from "./utils/WeatherContext";

function App() {
  const [weather, setWeather] = useState({
    temp: "",
    windspeed: "",
    icon: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState({
    isSignedIn: false,
    checkIfLoggedIn: (response) => {
      checkIfLoggedIn(response);
    },
    name: "",
    headshot: "",
    id: "",
  });

  const checkIfLoggedIn = (response) => {
    if (isLoggedIn.isSignedIn === true) {
      setIsLoggedIn({
        ...isLoggedIn,
        isSignedIn: false,
        id: response.data.googleId,
      });
    }

    return setIsLoggedIn({
      ...isLoggedIn,
      isSignedIn: true,
      name: response.data.name,
      headshot: response.data.headshot,
      id: response.data.googleId,
    });
  };
  return (
    <div className="bg-green-500">
      <Router>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <WeatherContext.Provider value={{ weather, setWeather }}>
            <Route exact path="/" component={Login} />
            {isLoggedIn.isSignedIn === true ? <Navbar></Navbar> : null}
            <Switch>
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/calendar" component={Calendar} />
              <PrivateRoute path="/successqr" component={SuccessQR} />
            </Switch>
            <Route path="/logout" component={LogoutPage} />
          </WeatherContext.Provider>
        </LoginContext.Provider>
      </Router>
    </div>
  );
}

export default App;
