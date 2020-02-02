import axios from 'axios';
import { URL } from '../../config';

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
        console.log('in catch')
        return { error: err}
    }
}