import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route strict exact={true} path="/" component={Screen1}></Route>
          <Route
            strict
            exact={true}
            path="/screen2/:id"
            component={Screen2}
          ></Route>
        </Router>
      </>
    );
  }
}
