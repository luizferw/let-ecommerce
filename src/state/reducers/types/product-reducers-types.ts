import { ProductType } from "@/data/models"
import { FilterActionType, ProductActionType, SortActionType } from "@/state/actions/types"

export type ProductReducerType = {
  type: ProductActionType | FilterActionType
  payload: ProductType
  search?: string 
  filter?: {
    firstValue: string
    secondValue: string
  }
  sortBy?: { 
    sortBy:SortActionType 
  }
}