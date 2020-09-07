import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-956e3.firebaseio.com/'
});


export default instance;
