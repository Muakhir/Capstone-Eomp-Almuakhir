import axios from "axios";

function applyToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    return axios; // Return the Axios instance
}

export default applyToken;

