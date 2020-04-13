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

const saveToLocal = (cart) => {
  if(window.localStorage) {
        window.localStorage.setItem('__cart', JSON.stringify(cart))
  }
}

const getFromLocal = () => {
    if(window.localStorage) {
        const cart = window.localStorage.getItem('__cart')
        if(cart || cart !== null) {
            return JSON.parse(cart)
        } else {
            return []
        }
  }
}

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
