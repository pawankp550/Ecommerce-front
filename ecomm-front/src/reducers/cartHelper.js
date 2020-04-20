export const addProduct = (cart, payload) => {
    const cartTemp = [...cart]
    const cartLength = cartTemp.length

    for(let i = 0; i < cartLength; i++ ) {
        if(cartTemp[i]['_id'] === payload._id) {
            cartTemp[i].count = cartTemp[i]['count'] + 1 
            return cartTemp
        }
    }
    const product = {...payload, count: 1}
    return [...cartTemp, product]
}

export const removeProduct = (cart, payload) => {
    return cart.filter(item => {
        return item._id !== payload._id
    })
}

export const saveToLocal = (cart) => {
  if(window.localStorage) {
        window.localStorage.setItem('__cart', JSON.stringify(cart))
  }
}

export const getFromLocal = () => {
    if(window.localStorage) {
        const cart = window.localStorage.getItem('__cart')
  
        if(cart === 'undefined' || cart === null) {
            return []
        } else {
            return JSON.parse(cart)
        }
  }
}

export const incrementProductQuantity = (cart, payload) => {
    const cartTemp = [...cart]
    const cartLength = cartTemp.length

    for(let i = 0; i < cartLength; i++ ) {
        if(cartTemp[i]['_id'] === payload._id) {
            cartTemp[i].count = cartTemp[i]['count'] + 1 
            return cartTemp
        }
    }
}

export const decrementProductQuantity = (cart, payload) => {
    const cartTemp = [...cart]
    const cartLength = cartTemp.length

    for(let i = 0; i < cartLength; i++ ) {
        if(cartTemp[i]['_id'] === payload._id) {
            cartTemp[i].count = cartTemp[i]['count'] - 1 
            return cartTemp
        }
    }
}