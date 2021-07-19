import { Component } from "react";

interface IState {}
interface IProps {}

class Nav extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>This is nav section</h1>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default Nav;
