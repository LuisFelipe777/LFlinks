import axios from "axios";

export const key = "082d06b1311c1dcb524011b94f8c408418ec41c0";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        "Authorization": `Bearer ${key}`
    }
})

export default api;