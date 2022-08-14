import { FILTER_BY_TITLE } from "@/state/actions-types";

export const filterByTitle = (search: string) => {
  return (dispatch: any) => {
    dispatch(
      { 
        type: FILTER_BY_TITLE, search: search 
      }
    );
  }
}