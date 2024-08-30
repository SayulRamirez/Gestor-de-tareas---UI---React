import axios from "axios";

const API_URL = "http://127.0.0.1:8080/auth";

class Auth {

    register(register) {
        return axios.post(`${API_URL}/register`, register);
    }
}

export default new Auth();