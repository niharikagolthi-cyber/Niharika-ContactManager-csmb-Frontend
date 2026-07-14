import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanagerbackend-jism.onrender.com"
});

export default API;