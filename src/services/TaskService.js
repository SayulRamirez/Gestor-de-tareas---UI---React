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
}

export default new TaskService();