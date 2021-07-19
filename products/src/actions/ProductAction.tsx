import axios from "axios";
import { Dispatch } from "react";
import {
  ProductActionsTypes,
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAIL,
  PRODUCTS_LOADING_SUCCESS,
} from "../types/ProductActionsTypes";

const getProducts = () => {
  return async (dispatch: Dispatch<ProductActionsTypes>) => {
    dispatch({
      type: PRODUCTS_LOADING,
      loading: false,
      products: [],
      error: "",
    });
    try {
      const { data } = await axios.get("http://localhost:8080/api/products");
      dispatch({
        type: PRODUCTS_LOADING_SUCCESS,
        loading: true,
        products: data,
        error: "",
      });
    } catch (err: any) {
      dispatch({
        type: PRODUCTS_LOADING_FAIL,
        loading: true,
        products: [],
        error: err.message,
      });
    }
  };
};

export default getProducts;
