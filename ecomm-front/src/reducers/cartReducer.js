import { addProduct, removeProduct, saveToLocal, getFromLocal, incrementProductQuantity, decrementProductQuantity } from './cartHelper'
let cart = []

const cartReducer = (state = getFromLocal(), action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            cart = addProduct(state, action.payload)
            saveToLocal(cart)
            return cart

        case "REMOVE_PRODUCT":
            cart = removeProduct(state, action.payload)
            saveToLocal(cart)
            return cart    
        
        case "INCREMENT_QUANTITY":
            cart = incrementProductQuantity(state, action.payload)
            saveToLocal(cart)
            return cart

        case "DECREMENT_QUANTITY":
            cart = decrementProductQuantity(state, action.payload)
            saveToLocal(cart)
            return cart    
        
        case "CLEAR_CART":
            cart = []
            saveToLocal(cart)
            return cart
        
        default:
            return state    
    }
}

export default cartReducer
