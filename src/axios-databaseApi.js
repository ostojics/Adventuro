import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://adventuro-39e3f-default-rtdb.firebaseio.com/'
})

export default instance;