import {useEffect, useState} from "react";
import {getIdFromToken} from "../utils/getIdFromToken.js";
import TaskService from "../services/TaskService.js";
import {Link} from "react-router-dom";

export const Tasks = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const id = getIdFromToken();

        TaskService.getAll(id).then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.error("Error fetching tasks:", error);
        })
    }, []);

    function setup() {
        if (tasks.length === 0) {
            return (
                <div>
                    <p>No tienes tareas actualmente</p>
                </div>
            )
        }

        return (
            <div>
                {tasks.map(task => (
                    <Link to={`/task/${task.id}`} key={task.id}>
                        <p>Titulo: {task.title}</p>
                        <p>Estatus:{task.status}</p>
                        <p>Prioridad: {task.priority}</p>
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h3>Tareas asignadas</h3>
            <Link to={'/reception'}>Regresar</Link>
            {setup()}
        </div>
    );
}