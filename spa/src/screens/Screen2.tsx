import React, { Component } from "react";
import { match as Match } from "react-router-dom";

interface routeParam {
  id: any;
}

interface IState {}

interface IProps {
  match: Match<routeParam>;
  location: Location;
}

export default class Screen2 extends Component<IProps, IState> {
  render() {
    const qty = this.props.location.search
      ? Number(this.props.location.search.split("=")[1])
      : 1;
    const id = this.props.match.params.id;
    return (
      <>
        <h1>This is Screen 2 </h1>
        <h4>{id}</h4>
        <h4>{qty}</h4>
      </>
    );
  }
}
