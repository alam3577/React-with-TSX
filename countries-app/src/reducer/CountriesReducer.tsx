import Country from "../model/Country";
import {
  CountriesActionTypes,
  COUNTRIES_LOADING,
  COUNTRIES_LOADING_FAIL,
  COUNTRIES_LOADING_SUCCESS,
} from "../types/CountriesActionTypes";

interface IState {
  loading: boolean;
  countries: Country[];
  error: string;
}

const initialState: IState = {
  loading: false,
  countries: [],
  error: "",
};

const CountriesReducer = (
  state = initialState,
  action: CountriesActionTypes,
): IState => {
  switch (action.type) {
    case COUNTRIES_LOADING:
    case COUNTRIES_LOADING_SUCCESS:
    case COUNTRIES_LOADING_FAIL:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
        error: action.error,
      };

    default:
      return state;
  }
};

export default CountriesReducer;
