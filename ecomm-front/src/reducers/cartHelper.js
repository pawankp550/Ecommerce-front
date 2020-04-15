export const getProductList = (cart, payload) => {
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

export const saveToLocal = (cart) => {
  if(window.localStorage) {
        window.localStorage.setItem('__cart', JSON.stringify(cart))
  }
}

export const getFromLocal = () => {
    if(window.localStorage) {
        const cart = window.localStorage.getItem('__cart')
        if(cart || cart !== null) {
            return JSON.parse(cart)
        } else {
            return []
        }
  }
}