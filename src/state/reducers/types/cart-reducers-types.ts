import { ProductType } from "@/data/models"
import { CartActionType } from "@/state/actions/types"

export type CartReducerType = {
  type: CartActionType
  payload: ProductType
}