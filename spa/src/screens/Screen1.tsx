import { History, LocationState } from "history";
import { Component } from "react";

interface IState {}

interface IProps {
  history: History<LocationState>;
}

class Screen1 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  spa = () => {
    this.props.history.push(`/screen2/111?qty=10`);
  };
  render() {
    return (
      <>
        <h1>This is screen 1. Click below to move to screen2 </h1>
        <button onClick={this.spa}>Navigate</button>
      </>
    );
  }
}

export default Screen1;
