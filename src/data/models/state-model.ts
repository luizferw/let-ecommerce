import { ProductType } from "@/data/models"

export type State = {
  products: {
    products: ProductType[] | []
    filteredProducts: ProductType[] | []
  } 

  cart: {
    products: ProductType[] | []
  }
}
