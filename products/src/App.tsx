import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./screens/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailScreen from "./screens/DetailScreen";

interface IState {}

interface IProps {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>This is App Screen</h1>
        <ToastContainer />
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <NavLink exact={true} strict to="/">
                Sajjad
              </NavLink>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    strict
                    exact
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          {/* Body */}

          <main>
            <Route exact={true} strict path="/" component={Home}></Route>
            <Route
              exact={true}
              strict
              path="/details/:id"
              component={DetailScreen}
            ></Route>
          </main>
          <footer className="bg-dark text-center text-light">
            @copyright 2021
          </footer>
        </Router>
      </>
    );
  }
}

export default connect()(App);
