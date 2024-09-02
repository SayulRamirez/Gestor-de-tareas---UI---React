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
            <p>Título: <input type='text' name='titleTask' value={titleTask}
                              onChange={e => setTitleTask(e.target.value)}/></p>
            <p>Descripción: <textarea name='descriptionTask' value={descriptionTask} maxLength='255'
                                      onChange={e => setDescriptionTask(e.target.value)}/></p>
            <p>Colaborador <input type='email' name='email' value={email}
                                  onChange={e => setEmail(e.target.value)}/></p>
            <p>Entrega estimada: <input type="date" name="dateEstimate" value={dateEstimate}
                                        onChange={e => setDateEstimate(e.target.value)}/></p>
            <p>Prioridad: <select name='priority' value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="LOW">Baja</option>
                <option value="MEDIUM">Media</option>
                <option value="HIGH">Alta</option>
            </select></p>

            <button onClick={createTask}>Asignar tarea</button>
            <Link to={`/project/${idProject}`}>Cancelar</Link>
        </div>
    );
}