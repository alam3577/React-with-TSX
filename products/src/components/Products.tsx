import React, { Component } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

interface IState {}
interface IProps {
  arr: any;
}

class Product extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const res = this.props.arr;
    return (
      <>
        <h4>This is Product Scrren</h4>
        <div className="main__card">
          {res.map((elem: any, index: any) => (
            <div className="card" key={index} style={{ width: "18rem" }}>
              <img src={elem.image} className="card-img-top" alt={elem.name} />
              <div className="card-body">
                <h5 className="card-title">{elem.name}</h5>
                <p className="card-text">{elem.description}</p>
                <NavLink
                  exact
                  strict
                  to={`/details/${elem._id}`}
                  className="btn btn-primary"
                >
                  View Products
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Product;
