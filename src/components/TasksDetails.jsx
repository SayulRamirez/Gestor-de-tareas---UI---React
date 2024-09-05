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
            <Link to={`/report/${idProject}`} className='btn btn-primary btn-lg mb-4'>Regresar al reporte</Link>
            {tasks.map(task => (
                <div key={task.id} className='border border-success mb-5'>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Titulo: {task.title}</label>
                    </div>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Descripción: {task.description}</label>
                    </div>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Estatus: {task.status}</label>
                    </div>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Fecha de entrega: {task.estimate_delivery}</label>
                    </div>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Prioridad: {task.priority}</label>
                    </div>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Fecha de creación: {task.create_date}</label>
                    </div>
                    <div className='mb-2 row text-lg-start'>
                        <label className='col-sm-12'>Días de ejecución: {task.runtime}</label>
                    </div>
                    <button className='btn btn-danger mb-4' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
                </div>
            ))}
        </div>
    );
};
