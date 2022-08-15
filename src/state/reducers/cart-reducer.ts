import { ProductType } from "@/data/models";
import { ADD_TO_CART, REMOVE_FROM_CART } from "@/state/actions/types";
import { CartReducerType } from "@/state/reducers/types";

interface CartState {
  products: ProductType[]
}

const initialState = {
  products: []

}

export const cartReducer = (state: CartState = initialState, action: CartReducerType) => {
  switch (action.type) {
    case ADD_TO_CART : {
      if(!state.products.length) { return { ...state, products: [...state.products, action.payload] } }

      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload.id) return state
      }
      
      return {...state, products: [...state.products, action.payload]}
    } case REMOVE_FROM_CART : {
      if(!state.products.length) return state

      return {...state, products: state.products.filter(product => product.id !== action.payload.id)}
      
    } default : return state
  }
}