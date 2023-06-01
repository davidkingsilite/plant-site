import axios from "axios";
const BASE_URL = 'https://travelexperience-api.onrender.com';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-type': 'application/json' },
    withCredentials: true
});


