import { Component } from "react";

interface IState {}

interface IProps {
  var: any;
}

class Child extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>This is a Child Components</h1>
        <h2>This message from Parent class is this :- {this.props.var}</h2>
        <h3>This is a childern :- {this.props.children} </h3>
      </>
    );
  }
}

export default Child;
