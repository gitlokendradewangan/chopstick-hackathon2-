import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import withMUI from "./hoc/withMUI";
import withUser from "./hoc/withUser";
import withAuthentication from "./hoc/withAuthentication";
import Home from "./containers/Home";
import Playground from "./containers/Playground";
const App = props => (
  <div>
    <Router>
      <div>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/play" render={props => <Playground {...props} />} />
      </div>
      <div />
    </Router>
  </div>
);

export default withAuthentication(withMUI(withUser(App)));
