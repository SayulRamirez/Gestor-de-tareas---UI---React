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
            <div className='row justify-content-center border border-success'>
                {tasks.map(task => (
                    <div className='col-sm-3 mb-5 m-1 border border-success' key={task.id}>
                        <div className='card-body'>
                            <h5 className='card-title'>Titulo: {task.title}</h5>
                            <p className='card-text'>Estatus:{task.status}</p>
                            <p className='card-footer'>Prioridad: {task.priority}</p>
                            <Link to={`/task/${task.id}`} className='btn btn-primary'>Ver detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h3>Tareas asignadas</h3>
            <Link to={'/reception'} className='btn btn-primary'>Regresar</Link>
            {setup()}
        </div>
    );
}