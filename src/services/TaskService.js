import apiClient from "../utils/apiClient.js";

const URL = "/tasks";

class TaskService {

    create(request) {
        return apiClient.post(`${URL}`, request);
    }

    getTasksFromProject(idUser, idProject) {
        return apiClient.get(`${URL}/user/${idUser}/project/${idProject}`);
    }

    deleteTask(id) {
        return apiClient.delete(`${URL}/${id}`);
    }

    getAll(id) {
        return apiClient.get(`${URL}/all/${id}`);
    }

    update(request) {
        return apiClient.put(`${URL}`, request);
    }

    getTask(id) {
        return apiClient.get(`${URL}/${id}`);
    }
}

export default new TaskService();