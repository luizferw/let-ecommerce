import { ProductType } from "@/data/models";
import { SortActionType, SORT_PRODUCTS, UPDATE_PRODUCT } from "@/state/actions/types";

export const updateProduct = (product: ProductType) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: UPDATE_PRODUCT, payload: product 
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