import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080/api/task",
    timeout: 5000,
});

export default api;