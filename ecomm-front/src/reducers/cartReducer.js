const getProductList = (cart, payload) => {
    const cartTemp = [...cart]
    const cartLength = cartTemp.length

    for(let i = 0; i < cartLength; i++ ) {
        if(cartTemp[i]['_id'] === payload._id) {
            cartTemp[i].basketQuantity = cartTemp[i]['basketQuantity'] + 1 
            return cartTemp
        }
    }
    const product = {...payload, basketQuantity: 1}
    return [...cartTemp, product]
}

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            return getProductList(state, action.payload)
        
        default:
            return state    
    }
}

export default cartReducer
