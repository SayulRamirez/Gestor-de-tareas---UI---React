import apiClient from "../utils/apiClient.js";
import {getIdFromToken} from "../utils/getIdFromToken.js";

const URL = "/projects"

class Project {

    getAllProjects() {

        const id = getIdFromToken();

        return apiClient(`${URL}/all/${id}`);
    }
}

export default new Project();