import { ProductType } from "@/data/models";
import { ADD_PRODUCT, DECREASE_AMOUNT, INCREASE_AMOUNT } from "@/state/actions-types";

export const addProduct = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: ADD_PRODUCT, payload: product 
      }
    );
  }
}

export const decreaseAmount = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: DECREASE_AMOUNT, payload: product 
      }
    );
  }
}

export const increaseAmount = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: INCREASE_AMOUNT, payload: product 
      }
    );
  }
}