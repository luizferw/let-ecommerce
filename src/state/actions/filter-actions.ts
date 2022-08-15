import { FILTER_BY_DATE, FILTER_BY_PRICE, FILTER_BY_SEARCH } from "@/state/actions/types";

export const filterBySearch = (term: string) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: FILTER_BY_SEARCH, search: term 
      }
    );
  }
}

export const filterByDate = (date: {firstValue: string, secondValue: string}) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: FILTER_BY_DATE, filter: date 
      }
    );
  }
}

export const filterByPrice = (price: {firstValue: string, secondValue: string}) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: FILTER_BY_PRICE, filter: price 
      }
    );
  }
}
