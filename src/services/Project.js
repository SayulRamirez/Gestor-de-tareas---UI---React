import apiClient from "../utils/apiClient.js";
import {getIdFromToken} from "../utils/getIdFromToken.js";

const URL = "/projects"

class ProjectService {

    getAllProjects() {

        const id = getIdFromToken();

        return apiClient.get(`${URL}/all/${id}`);
    }

    getProject(id) {
        return apiClient.get(`${URL}/${id}`);
    }

    getReport(id) {
        return apiClient.get(`${URL}/report/${id}`);
    }

    updateStatus(request) {
        return apiClient.put(`${URL}`, request);
    }

    deleteProject(id) {
        return apiClient.delete(`${URL}/${id}`);
    }

    createProject(request) {
        return apiClient.post(`${URL}`, request);
    }
}

export default new ProjectService();