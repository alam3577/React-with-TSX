import React, { Component } from "react";

export default class LoadingBox extends Component {
  render() {
    return (
      <>
        <i
          className="fa fa-spinner fa-spin"
          style={{ fontSize: "60px", color: "red" }}
        ></i>
      </>
    );
  }
}
