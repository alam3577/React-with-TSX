import React, { Component } from "react";
import { connect } from "react-redux";
import { match as Match } from "react-router-dom";
import { toast } from "react-toastify";
import getDetails from "../actions/DetailsAction";
import LoadingBox from "../components/LoadingBox";

interface IState {
  count: any;
}

interface routeParams {
  id: any;
}

interface IProps {
  match: Match<routeParams>;
  my_fun: any;
  res: any;
}

class DetailScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.props.my_fun(this.props.match.params.id);
  }
  err = (msg: any) => {
    toast.error(msg);
  };
  render() {
    const { loading, product, error } = this.props.res;
    return (
      <>
        <h1>This is details screen</h1>
        <h5>{this.props.match.params.id}</h5>
        {!loading ? (
          <LoadingBox></LoadingBox>
        ) : error === "Network Error" ? (
          this.err(`${error}`)
        ) : (
          <div>
            <div className="main__card">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>

            <div className="main_card">
              <div className="card" style={{ width: "18rem" }}></div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div>
                  <h3>Availability</h3>
                  {product.countInStock > 0 ? (
                    <span className="text-success">Produt Available</span>
                  ) : (
                    <span className="text-danger">Produt not Available</span>
                  )}
                </div>
                <div>
                  <h4>Select Qty</h4>
                  <select
                    name=""
                    id=""
                    value={this.state.count}
                    onChange={(e: any) => {
                      this.setState({ count: e.target.value });
                    }}
                  >
                    {(() => {
                      let options = [];
                      for (let i = 0; i < product.countInStock; i++) {
                        console.log("This is Options", options);
                        options.push(
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>,
                        );
                      }
                      return options;
                    })()}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

// subscribe
const recive = (state: any) => {
  return {
    res: state.details,
  };
};

// dispatch
const send = (dispatch: any) => {
  return {
    my_fun: (id: any) => {
      dispatch(getDetails(id));
    },
  };
};

export default connect(recive, send)(DetailScreen);
