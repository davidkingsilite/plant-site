import axios from "axios";
const BASE_URL = 'http://localhost:3500';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'Content-type': 'application/json' },
    withCredentials: true
});


