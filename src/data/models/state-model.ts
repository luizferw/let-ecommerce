import { ProductType } from "@/data/models"

export type State = {
  products: {
    products: ProductType[] | []
  } 

  cart: {
    products: ProductType[] | []
  }
}