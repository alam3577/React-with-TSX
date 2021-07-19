import { Component } from "react";
import Child from "./Child";

interface IState {}

interface IProps {}

class Parent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>This is a Parent Components</h1>
        <Child var={"hello"}>My Frind</Child>
      </>
    );
  }
}

export default Parent;
