import {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import TaskService from "../services/TaskService.js";

export const NewTask = () => {

    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');
    const [dateEstimate, setDateEstimate] = useState('');
    const [email, setEmail] = useState('');
    const [priority, setPriority] = useState('LOW');

    const {idProject} = useParams();

    const navigate = useNavigate();

    function createTask() {

        const task = {
            title: titleTask,
            description: descriptionTask,
            email: email,
            project: idProject,
            estimate_delivery: dateEstimate,
            priority: priority
        }

        console.log("Data", task);

        TaskService.create(task).then(response => {
            if (response.status === 201) {
                navigate(`/project/${idProject}`);
                return;
            }

            alert("Ocurrio un error, volver a intentar.");
        }).catch(error => {
            console.error("Error fetching projects:", error);
        })
    }

    return (

        <div>
            <h1>Crear nueva tarea</h1>
            <div className='mb-2 row'>
                <label form='titleTask' className='col-sm-2 col-form-label'>Título:</label>
                <div className='col-sm-12'>
                    <input type='text' name='titleTask' id='titleTask' className='form-control'
                           required value={titleTask}
                           onChange={e => setTitleTask(e.target.value)}/>
                </div>
            </div>
            <div className='mb-2 row'>
                <label form='descriptionTask' className='col-sm-12 col-form-label'>Descripción:</label>
                <div className='col-sm-12'>
                    <textarea name='descriptionTask' id='descirptionTask' className='form-control'
                              required value={descriptionTask} maxLength='255'
                              onChange={e => setDescriptionTask(e.target.value)}/>
                </div>
            </div>
            <div className='mb-2 row'>
                <label form='email' className='col-sm-2 col-form-label'>Colaborador:</label>
                <div className='col-sm-12'>
                    <input type='email' name='email' id='email' className='form-control'
                           required placeholder='colaborador@email.com' value={email}
                           onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className='mb-2 row'>
                <label form='dateEstimate' className='col-sm-2 col-form-label'>Entrega estimada:</label>
                <div className='col-sm-12'>
                    <input type='date' name='dateEstimate' id='dateEstimate' className='form-control'
                           required value={dateEstimate}
                           onChange={e => setDateEstimate(e.target.value)}/>
                </div>
            </div>
            <div className='mb-2 row'>
                <label form='priority' className='col-sm-2 col-form-label'>Prioridad:</label>
                <div className='col-sm-12'>
                    <select name='priority' id='priority' className='form-select' value={priority} onChange={e => setPriority(e.target.value)}>
                        <option value="LOW">Baja</option>
                        <option value="MEDIUM">Media</option>
                        <option value="HIGH">Alta</option>
                    </select>
                </div>
            </div>
            <button onClick={createTask} className='btn btn-primary btn-lg mx-2'>Asignar tarea</button>
            <Link to={`/project/${idProject}`} className='btn btn-danger btn-lg'>Cancelar</Link>
        </div>
    );
}