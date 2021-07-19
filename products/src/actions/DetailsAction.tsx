import axios from "axios";
import { Dispatch } from "redux";
import {
  DetailsTypes,
  DETAILS_LOADING,
  DETAILS_LOADING_FAIL,
  DETAILS_LOADING_SUCCESS,
} from "../types/DetailsTypes";

const getDetails = (id: any) => {
  return async (dispatch: Dispatch<DetailsTypes>) => {
    dispatch({
      type: DETAILS_LOADING,
      loading: false,
      product: {
        _id: "",
        brand: "",
        countInStock: 0,
        description: "",
        image: "",
        name: "",
        numReviews: 0,
        price: 0,
        rating: 0,
      },
      error: "",
    });
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/products/${id}`,
      );
      dispatch({
        type: DETAILS_LOADING_SUCCESS,
        loading: true,
        product: data,
        error: "",
      });
    } catch (err: any) {
      dispatch({
        type: DETAILS_LOADING_FAIL,
        loading: true,
        product: {
          _id: "",
          brand: "",
          countInStock: 0,
          description: "",
          image: "",
          name: "",
          numReviews: 0,
          price: 0,
          rating: 0,
        },
        error: err.message,
      });
    }
  };
};

export default getDetails;
