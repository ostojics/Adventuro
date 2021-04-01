import axios from 'axios';

const instance = axios.create({
    baseURl: 'https://adventuro-39e3f-default-rtdb.firebaseio.com/'
})

export default instance;