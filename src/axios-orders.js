import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-c51a7.firebaseio.com/'
});

export default instance;