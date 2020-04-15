import { getProductList, saveToLocal, getFromLocal } from './cartHelper'

const cartReducer = (state = getFromLocal(), action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            const cart = getProductList(state, action.payload)
            saveToLocal(cart)
            return cart
        
        default:
            return state    
    }
}

export default cartReducer
