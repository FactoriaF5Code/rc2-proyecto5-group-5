import axios from 'axios';

const api_URL = axios.create({
    baseURL: `https://www.themoviedb.org/3`
});

export default api_URL;