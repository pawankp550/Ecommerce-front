import axios from 'axios';
import { URL } from '../../config';
import queryString from 'query-string';

export const getProducts = async (sortBy, limit) => {
     try {
        const response = await axios.get(`${URL}/product?sortBy=${sortBy}&limit=${limit}`)
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

export const getFilteresProducts = async (skip, limit, filters) => {
     try {
        const response = await axios.post(`${URL}/products/by/search`, {skip, limit, filters})
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const findProducts = async (searchData) => {
    const query = queryString.stringify(searchData)
    try {
        const response = await axios.get(`${URL}/products/search?${query}`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getProduct = async (productId) => {
     try {
        const response = await axios.get(`${URL}/product/${productId}`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getRelatedProducts = async (productId, sortBy, limit) => {
     try {
        const response = await axios.get(`${URL}/product/related/${productId}?sortBy=${sortBy}&limit=${limit}`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getBraintreeToken = async (token) => {
     try {
        const response = await axios.get(`${URL}/braintree/getToken`, {
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

export const processPayment = async (token, paymentData) => {
    console.log({token, paymentData})
     try {
        const response = await axios.post(`${URL}/braintree/payment`, paymentData, {
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