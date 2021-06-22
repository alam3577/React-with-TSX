import axios from "axios";
import { Dispatch } from "redux";
import {
  CountriesActionTypes,
  COUNTRIES_LOADING,
  COUNTRIES_LOADING_FAIL,
  COUNTRIES_LOADING_SUCCESS,
} from "../types/CountriesActionTypes";

const getCountries = () => {
  return async (dispatch: Dispatch<CountriesActionTypes>) => {
    dispatch({
      type: COUNTRIES_LOADING,
      loading: false,
      countries: [],
      error: "",
    });

    try {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      console.log("DATA FROM SERVER", data);
      dispatch({
        type: COUNTRIES_LOADING_SUCCESS,
        loading: true,
        countries: data,
        error: "",
      });
    } catch (err:any) {
      dispatch({
        type: COUNTRIES_LOADING_FAIL,
        loading: true,
        countries: [],
        error: err.message,
      });
    }
  };
};

export default getCountries;
