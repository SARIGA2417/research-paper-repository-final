import axios from "axios";

const api = axios.create({
baseURL:
"https://research-paper-repository-final.onrender.com/api",
});

export default api;