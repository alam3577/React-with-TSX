import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import getProducts from "../actions/ProductAction";
import LoadingBox from "../components/LoadingBox";
import Product from "../components/Products";

interface IState {}
interface IProps {
  res: any;
  my_fun: any;
}

class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    this.props.my_fun();
  }
  handleToast = (err: any) => {
    toast.error(`${err}`);
  };
  render() {
    const { loading, error, products } = this.props.res;
     
    return (
      <>
        {/* <h4>{JSON.stringify(products)}</h4> */}
        {!loading ? (
          <LoadingBox></LoadingBox>
        ) : error === "Network Error" ? (
          this.handleToast(`${error}`)
        ) : (
          <Product arr={products}></Product>
        )}
      </>
    );
  }
}

// subscription
const recive = (state: any) => {
  return {
    res: state.products,
  };
};

// dispatch
const send = (dispatch: any) => {
  return {
    my_fun: () => {
      dispatch(getProducts());
    },
  };
};

export default connect(recive, send)(Home);
