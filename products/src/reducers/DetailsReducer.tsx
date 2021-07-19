import {
  detailAsync,
  DetailsTypes,
  DETAILS_LOADING,
  DETAILS_LOADING_FAIL,
  DETAILS_LOADING_SUCCESS,
} from "../types/DetailsTypes";

const initialState: detailAsync = {
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
};

const detailsReducer = (
  state = initialState,
  action: DetailsTypes,
): detailAsync => {
  switch (action.type) {
    case DETAILS_LOADING:
    case DETAILS_LOADING_SUCCESS:
    case DETAILS_LOADING_FAIL:
      return {
        ...state,
        loading: action.loading,
        product: action.product,
        error: action.error,
      };
      break;

    default:
      return state;
  }
};

export default detailsReducer;
