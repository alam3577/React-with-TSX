import { Component } from "react";
import Nav from "./nav/Nav";

interface IState {}
interface IProps {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <h1> THis is a App section</h1>
        <Nav></Nav>
      </>
    );
  }
}

export default App;
