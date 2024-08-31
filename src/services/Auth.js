import axios from "axios";

const API_URL = "http://127.0.0.1:8080/auth";

class Auth {

    register(request) {
        return axios.post(`${API_URL}/register`, request);
    }

    login(request) {
        return axios.post(`${API_URL}/login`, request);
    }
}

export default new Auth();