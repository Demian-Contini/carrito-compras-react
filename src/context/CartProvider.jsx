import { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {

    const initialState = []

    const cartReducer = (state = initialState, action = {}) => {
        
        switch (action.type) {

            case '[CART] Add Product':
                // Logica para evitar duplicados y sumar cantidad
                const existingProduct = state.find(item => item.id == action.payload.id); // Usamos == para mantener tu logica original de tipos

                if (existingProduct) {
                    // Si existe, incrementa la cantidad (de forma inmutable)
                    return state.map(item =>
                        item.id == action.payload.id
                            ? { ...item, quantity: item.quantity + 1 } 
                            : item
                    );
                }
                // Si NO existe, lo añade como un nuevo ítem con cantidad 1
                return [...state, { ...action.payload, quantity: 1 }];


            case '[CART] Remove Product':
                // Mantiene la logica original con desigualdad flexible
                return state.filter(product => product.id != action.payload)

            case '[CART] Increment Quantity':
                return state.map(product => {
                    const cant = product.quantity + 1
                    // Mantiene la logica original con igualdad flexible
                    if (product.id == action.payload) return { ...product, quantity: cant }
                    return product
                })

            case '[CART] Decrement Quantity':
                return state.map(product => {
                    const cant = product.quantity - 1
                    // Mantiene la logica original con igualdad flexible
                    if (product.id == action.payload && product.quantity > 1) return { ...product, quantity: cant }
                    return product
                })

            default:
                return state
        }
    }

    const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

    const addProduct = (product) => {
        
        const action = {
            type: '[CART] Add Product',
            payload: product // Enviamos el producto tal cual
        }
        dispatch(action)
    }

    // Funciones de dispatch 
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            payload: id
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment Quantity',
            payload: id
        }
        dispatch(action)
    }
    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement Quantity',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
}