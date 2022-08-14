import { FilterActionType } from "./filter-actions-types"

export type ProductActionType = 'ADD_PRODUCT' | 'REMOVE_PRODUCT' | FilterActionType

export const ADD_PRODUCT: ProductActionType = 'ADD_PRODUCT'