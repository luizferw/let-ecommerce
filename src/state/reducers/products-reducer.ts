import { ProductType } from "@/data/models";
import { ProductReducerType } from "@/state/reducers-types";
import { ADD_PRODUCT, FILTER_BY_TITLE } from "../actions-types";

interface ProductsState {
  products: ProductType[]
}

const initialState = {
  products: [
    {
      id: 11234,
      title: 'mid',
      price: '499',
      post_date: new Date()
    },
    {
      id: 1422,
      title: 'newer',
      price: '991',
      post_date: new Date()
    },
    {
      id: 241,
      title: 'older',
      price: '929',
      post_date: new Date()
    },
  ]
}

export const productsReducer = (state: ProductsState = initialState, action: ProductReducerType) => {
  switch (action.type) {
    case ADD_PRODUCT : {
      return {...state, products: [...state.products, action.payload]}
    } case FILTER_BY_TITLE : {
      const filteredProducts = []

      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < state.products.length; j++) {
          if (state.products[j].title.includes(action.search)) { filteredProducts.push(state.products[j]) }
        }
      }
      console.log(filteredProducts)
      return filteredProducts
    }
    default : return state
  }
}