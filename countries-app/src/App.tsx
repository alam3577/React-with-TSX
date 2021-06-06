import { Component } from "react";
import { connect } from "react-redux";
import getCountries from "./action/CountriesActions";

interface IState {}

interface IProps {
  my_fun: any;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    this.props.my_fun();
  }
  render() {
    return <></>;
  }
}

// subscription

const recive = (state: any) => {
  console.log("THIS IS SUBSCRIPTION", state);
  return {};
};

// dispatch

const send = (dispatch: any) => {
  console.log("THIS IS DISPATCH ", dispatch);
  return {
    my_fun: () => {
      dispatch(getCountries());
    },
  };
};

export default connect(recive, send)(App);
