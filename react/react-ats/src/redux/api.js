// const { default: axios } = require("axios");
import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:5000"
})

export default API