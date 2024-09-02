import {useEffect, useState} from "react";
import TaskService from "../services/TaskService.js";
import {Link, useParams} from "react-router-dom";

export const TasksDetails = () => {

    const  [tasks, setTasks] = useState([]);
    const {idUser, idProject} = useParams();

    useEffect(() => {
        TaskService.getTasksFromProject(idUser, idProject).then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.error("Fetch error: ", error);
        })
    }, [idProject, idUser])

    const deleteTask = (id) => {
        TaskService.deleteTask(id).then(response => {
            if (response.data.status === 404) {
                setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
            }
        }).catch(error => {
            if (error.response && error.response.status === 404) {
                console.error("Task not found: ", error);
                setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
            } else {
                console.error("Fetch error: ", error);
            }
        });
    }

    return (
        <div>
            <Link to={`/report/${idProject}`}>Regresar al reporte</Link>
            {tasks.map(task => (
                <div key={task.id}>
                    <p>Titulo: {task.title}</p>
                    <p>Descripción: {task.description}</p>
                    <p>Estatus: {task.status}</p>
                    <p>Fecha de entrega: {task.estimate_delivery}</p>
                    <p>Prioridad: {task.priority}</p>
                    <p>Fecha de creación: {task.create_date}</p>
                    <p>Días de ejecución: {task.runtime}</p>
                    <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
                </div>
            ))}
        </div>
    );
};
