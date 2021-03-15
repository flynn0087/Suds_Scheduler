/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";
import LogoutPage from "./pages/LogoutPage";
import LoginContext from "./utils/LoginContext";

function App() {
  return (
    <div>
      <Router>
        <LoginContext.Provider value={LoginContext}>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/availwash" component={AvailWash} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/successqr" component={SuccessQR} />
          <Route path="/logout" component={LogoutPage} />
        </LoginContext.Provider>
      </Router>
    </div>
  );
}

export default App;
