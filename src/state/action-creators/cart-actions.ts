import { ProductType } from "@/data/models";
import { ADD_TO_CART } from "@/state/actions-types";

export const addToCart = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: ADD_TO_CART, payload: product 
      }
    );
  }
}