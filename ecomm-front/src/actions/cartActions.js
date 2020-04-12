const addProduct = (productObj) => {
    return {
        type: 'ADD_PRODUCT',
        payload: productObj
    }
}

export default {
    addProduct
}