import {useEffect, useState} from "react";
import TaskService from "../services/TaskService.js";
import {Link, useParams} from "react-router-dom";
import {getIdFromToken} from "../utils/getIdFromToken.js";

export const Task = () => {

    const [task, setTask] = useState({});
    const [status, setStatus] = useState('');
    const {id} = useParams();
    const idUser = getIdFromToken();

    useEffect(() => {

        TaskService.getTask(id).then(response => {
            setTask(response.data);
            setStatus(response.data.status);
            
        }).catch(error => {
            console.error("Error fetching tasks:", error);
        })
    }, [id]);

    const updateStatus = (id) => {

        const request = {
            id: id,
            status: status
        }

        TaskService.update(request).then(response => {
            setStatus(response.data);
        }).catch(error => {
            console.error("Error fetching tasks:", error);
        })
    }

    return (         
        <div key={task.id}>
            <Link to={`/tasks/all/${idUser}`}>Regresar</Link>
            <p>Titulo: {task.title}</p>
            <p>Descripción: {task.description}</p>
            <p>Estatus:
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value='IN_PROGRESS'>Pendiente</option>
                    <option value='PENDING'>En progreso</option>
                    <option value='COMPLETE'>Completa</option>
                </select>
            </p>
            <p>Entrega estimada: {task.estimate_completion}</p>
            <p>Prioridad: {task.priority}</p>
            <p>Fecha de asignación: {task.create_date}</p>
            <p>Tiempo de ejecución: {task.runtime}</p>
            <button onClick={() => updateStatus(task.id)}>Actualizar estatus</button>
        </div>
    );
}