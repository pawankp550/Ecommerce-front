const addProduct = (productObj) => {
    return {
        type: 'ADD_PRODUCT',
        payload: productObj
    }
}

const removeProduct = (productObj) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: productObj
    }
}

const incrementQuantity = (productObj) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: productObj
    }
}

const decrementQuantity = (productObj) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: productObj
    }
}

export default {
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity
}