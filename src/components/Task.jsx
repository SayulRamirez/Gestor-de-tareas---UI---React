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
            <Link to={`/tasks/all/${idUser}`} className='btn btn-primary btn-lg'>Regresar</Link>
            <div className='mb-2 row'>
                <label className='col-sm-2'>Titulo: {task.title}</label>
            </div>
            <div className='mb-2'>
                <label className='mb-2 row'>Descripción: {task.description}</label>
            </div>
            <div className='mb-2 row'>
                <label form='status' className='col-sm-2 col-form-label'>Estatus:</label>
                <div className='col-sm-12'>
                    <select name='status' id='status' className='form-select'
                            value={task.status}
                            onChange={e => setStatus(e.target.value)}>
                        <option value='IN_PROGRESS'>Pendiente</option>
                        <option value='PENDING'>En progreso</option>
                        <option value='COMPLETE'>Completa</option>
                    </select>
                </div>
            </div>
            <div className='mb-2'>
                <label className='mb-2 row'>Entrega estimada: {task.estimate_completion}</label>
            </div>
            <div className='mb-2'>
                <label className='mb-2 row'>Prioridad: {task.priority}</label>
            </div>
            <div className='mb-2'>
                <label className='mb-2 row'>Fecha de asignación: {task.create_date}</label>
            </div>
            <div className='mb-2'>
                <label className='mb-2 row'>Tiempo de ejecución: {task.runtime}</label>
            </div>
            <button onClick={() => updateStatus(task.id)} className='btn btn-primary btn-lg'>Actualizar estatus</button>
        </div>
    );
}