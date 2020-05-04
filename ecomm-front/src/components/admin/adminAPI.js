import axios from 'axios';
import { URL } from '../../config';

export const createCategory = async (name, token) => {

    try {
        const response = await axios.post(`${URL}/category/create`, {
            "name": name
            },
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(`${URL}/category`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getOrders = async (token) => {

    try {
        const response = await axios.get(`${URL}/order/list`,
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getOrderStatuses = async (token) => {

    try {
        const response = await axios.get(`${URL}/order/status`,
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const updateOrderStatus = async (token, statusData) => {

    try {
        const response = await axios.put(`${URL}/order/changestatus`, statusData, 
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

// product CRUD operations

export const getProduct = async (productId) => {
     try {
        const response = await axios.get(`${URL}/product/${productId}`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const createProduct = async (data, token) => {

    try {
        const response = await axios.post(`${URL}/product/create`, data,
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const deleteProduct = async (token, productId) => {
    try {
        const response = await axios.delete(`${URL}/product/${productId}`,
            {
                headers: {
                Authorization: token
                }
            }
        )

        return response
    }
    catch (err) {
        return { error: err}
    }
}

export const getProducts = async () => {
    try {
        const response = axios.get(`${URL}/product?limit=100`)
        return response
    } 
    catch (err) {
        return { error: err }
    }
}

export const updateProduct = async (data, productId, token) => {
    try {
        const response = axios.patch(`${URL}/product/${productId}`,data,
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err }
    }
}