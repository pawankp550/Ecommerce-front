import axios from 'axios';
import { URL } from '../../config';
import qs from 'qs'

export const createCategory = async (name, token) => {

    try {
        const response = await axios.post(`${URL}category/create`, {
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

export const createProduct = async (formData, token) => {
    try {
        const response = await axios.post(`${URL}product/create`, formData,
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