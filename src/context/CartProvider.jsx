import React from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {

initialState = []

const [shoppingList, dispatch] = useReducer(shoppingReducer, initalState)

const addProduct = (product) => {
      const action = {
        type: '[CART] Add Product',
        payload: product
      }
      dispatch(action)
  
}
const removeProduct = (id) => {
      const action = {
        type: '[CART] Remove Product',
        payload: id
      }
      dispatch(action)

}
const incrementQuentity = (id) => {
      const action = {
        type: '[CART] Increment Quentity',
        payload: id
      }
      dispatch(action)

}
const decrementQuentity = (id) => {

     const action = {
        type: '[CART] Decrement Quentity',
        payload: id
      }
      dispatch(action)
}


const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[CART] Add Product' :
            return [...state, action.payload]

    case '[CART] Remove Product' :
            return state.filter(product => product.id !== action.payload)
            break;

    case '[CART] Increment Quentity' : // LUEGO SE AGREGA

      break;
      
    case '[CART] Decrement Quentity' : // LUEGO SE AGREGA

      break;
  

    default:
      return state
  }
}



  return (
    <CartContext.Provider value={{products}}>
        {children}
    </CartContext.Provider>
  )
}
