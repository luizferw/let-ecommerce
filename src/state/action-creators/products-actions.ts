import { ProductType } from "@/data/models";
import { ADD_PRODUCT } from "../actions-types";

export const addProduct = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: ADD_PRODUCT, payload: product 
      }
    );
  }
}