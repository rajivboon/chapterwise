import axios from 'axios';
import Cookies from "js-cookie"
// import { response } from 'express';

const setAuthHeader = () => {
    const token = Cookies.getJSON('jwt');
    
    if (token) {
        return  { headers: { 'authorization': `Bearer ${Cookies.getJSON('jwt')} ` } }
    }
    return undefined
}

export const getSecretData = async () => {
    return await axios.get('/api/v1/secret', setAuthHeader() ).then(response => response.data ) ;
}


// 1. return await axios.get('/api/v1/secret').then((response) => { return response.data });
// 2. return await axios.get('/api/v1/secret', { headers: { 'authorization': 'Testing header' } }).then(response => response.data);
// 3. return await axios.get('/api/v1/secret', { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')} `}} ).then(response => response.data ) ;
