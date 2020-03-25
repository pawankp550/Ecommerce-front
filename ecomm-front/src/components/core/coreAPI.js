import axios from 'axios'
import { URL } from '../../config';

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