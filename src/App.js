import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/404";

import "./assets/scss/style.scss";
import "./assets/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
