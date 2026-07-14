import axios from "axios";

const API = axios.create({
    baseURL: "https://niharika-contactmanager-csmb-backend.onrender.com" 
});

export default API;
