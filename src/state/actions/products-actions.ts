import { ProductType } from "@/data/models";
import { DECREASE_AMOUNT, INCREASE_AMOUNT, SortActionType, SORT_PRODUCTS } from "@/state/actions/types";

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

export const sortProducts = (sortBy: {sortBy: SortActionType} ) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: SORT_PRODUCTS, sortBy: sortBy 
      }
    );
  }
}