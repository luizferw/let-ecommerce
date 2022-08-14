import { ProductType } from "@/data/models"
import { ProductActionType } from "@/state/actions-types"

export type ProductReducerType = {
  type: ProductActionType
  payload: ProductType
  search: string
}