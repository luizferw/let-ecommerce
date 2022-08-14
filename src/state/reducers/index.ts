export * from './products-reducer'
export * from './cart-reducer'

import { combineReducers } from 'redux'
import { productsReducer } from './products-reducer'
import { cartReducer } from './cart-reducer'

export default combineReducers({
  products: productsReducer,
  cart: cartReducer
})