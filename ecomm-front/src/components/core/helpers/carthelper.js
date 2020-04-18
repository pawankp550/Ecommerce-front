export const calculateTotal = (products) => {
    let total = 0
    const totalProducts = products.length
    for(let i = 0; i < totalProducts; i++ ) {
        total += products[i].price * products[i].basketQuantity
    }

    return total
}