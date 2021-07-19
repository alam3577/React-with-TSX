import Products from "../modal/Products";

export const DETAILS_LOADING: string = "DETAILS_LOADING";
export const DETAILS_LOADING_SUCCESS: string = "DETAILS_LOADING_SUCCESS";
export const DETAILS_LOADING_FAIL: string = "DETAILS_LOADING_FAIL";

export interface detailAsync {
  loading: boolean;
  product: Products;
  error: string;
}

export interface DetailsLoading extends detailAsync {
  type: typeof DETAILS_LOADING;
}

export interface DetailsLoadingSuccess extends detailAsync {
  type: typeof DETAILS_LOADING_SUCCESS;
}

export interface DetailsLoadingFail extends detailAsync {
  type: typeof DETAILS_LOADING_FAIL;
}

export type DetailsTypes =
  | DetailsLoading
  | DetailsLoadingSuccess
  | DetailsLoadingFail;
