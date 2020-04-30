import axios from 'axios'
import { URL } from '../../config';

export const getUserData = async (token, userId) => {
    try {
        const response = await axios.get(`${URL}/users/${userId}`, {
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

export const updateUserData = async (token, userId, user) => {
    try {
        const response = await axios.put(`${URL}/users/${userId}`, user, 
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

export const fetchUserOrders = async (token, userId) => {
    console.log({token, userId})
    try {
        const response = await axios.post(`${URL}/users/order/details`, userId,
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