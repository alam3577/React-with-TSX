import Country from "../model/Country";

export const COUNTRIES_LOADING: string = "COUNTRIES_LOADING";
export const COUNTRIES_LOADING_SUCCESS: string = "COUNTRIES_LOADING_SUCCESS";
export const COUNTRIES_LOADING_FAIL: string = "COUNTRIES_LOADING_FAIL";

interface countriesAsync {
  loading: boolean;
  countries: Country[];
  error: string;
}

interface countriesLoading extends countriesAsync {
  type: typeof COUNTRIES_LOADING;
}

interface countriesLoadingSuccess extends countriesAsync {
  type: typeof COUNTRIES_LOADING_SUCCESS;
}

interface countriesLoadingFail extends countriesAsync {
  type: typeof COUNTRIES_LOADING_FAIL;
}

export type CountriesActionTypes =
  | countriesLoading
  | countriesLoadingSuccess
  | countriesLoadingFail;
