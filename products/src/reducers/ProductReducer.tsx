import {
  ProductActionsTypes,
  ProductsAsync,
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAIL,
  PRODUCTS_LOADING_SUCCESS,
} from "../types/ProductActionsTypes";

const initialState: ProductsAsync = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (
  state = initialState,
  action: ProductActionsTypes,
): ProductsAsync => {
  switch (action.type) {
    case PRODUCTS_LOADING:
    case PRODUCTS_LOADING_SUCCESS:
    case PRODUCTS_LOADING_FAIL:
      return {
        ...state,
        loading: action.loading,
        products: action.products,
        error: action.error,
      };
      break;

    default:
      return state;
  }
};

export default productReducer;
