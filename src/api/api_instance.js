import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        "Content-Type": "application/json",
        "timeout": 1000
    }
});

export default instance;