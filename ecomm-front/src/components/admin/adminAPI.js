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

export const createProduct = async (product, token) => {
    try {
         const response = await axios({
                method: 'post',
                url: `${URL}product/create`,
                data: qs.stringify(product),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            })
        return response
    }
    catch (err) {
        return { error: err}
    }
}