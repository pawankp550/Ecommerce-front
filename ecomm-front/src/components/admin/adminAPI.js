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