import { ProductType } from "@/data/models";
import { ADD_TO_CART, REMOVE_FROM_CART } from "@/state/actions-types";

export const addToCart = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: ADD_TO_CART, payload: product 
      }
    );
  }
}
export const removeFromCart = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: REMOVE_FROM_CART, payload: product 
      }
    );
  }
}