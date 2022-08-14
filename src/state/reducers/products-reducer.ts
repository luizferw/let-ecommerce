import { ProductType } from "@/data/models";
import { ProductReducerType } from "@/state/reducers-types";
import { ADD_PRODUCT, DECREASE_AMOUNT, INCREASE_AMOUNT } from "@/state/actions-types";
import update from 'immutability-helper';

interface ProductsState {
  products: ProductType[]
}

const initialState = {
  products: [
    {
      id: 1,
      title: 'Product 1',
      price: 499,
      amount: 1,
      post_date: new Date()
    },
    {
      id: 2,
      title: 'Product 2',
      amount: 1,
      price: 991,
      post_date: new Date()
    },
    {
      id: 3,
      title: 'Product 3',
      amount: 1,
      price: 49,
      post_date: new Date()
    },
    {
      id: 4,
      title: 'Product 4',
      amount: 1,
      price: 23,
      post_date: new Date()
    },
    {
      id: 5,
      title: 'Product 5',
      amount: 1,
      price: 91,
      post_date: new Date()
    },
  ]
}

export const productsReducer = (state: ProductsState = initialState, action: ProductReducerType) => {
  switch (action.type) {
    case ADD_PRODUCT : {
      return {...state, products: [...state.products, action.payload]}
    } case DECREASE_AMOUNT : {
      const objIndex = state.products.findIndex(obj => obj.id === action.payload.id);

      if(state.products[objIndex].amount >= 1) return state
      return {
        ...state, products: [...state.products.filter(p => p.id !== action.payload.id), action.payload]
      }
    } case INCREASE_AMOUNT : {
      return {
        ...state, products: [...state.products.filter(p => p.id !== action.payload.id), action.payload]
      }
    }
    default : return state
  }
}