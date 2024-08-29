import {useState} from "react";

export const NewTask = () => {

    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');
    const [dateEstimate, setDateEstimate] = useState('');
    const [email, setEmail] = useState('');
    const [priority, setPriority] = useState('');

    function createTask() {
        alert(titleTask + ' ' + descriptionTask + ' ' + dateEstimate + ' ' + email + ' ' + priority);
    }

    function cancelNewTask() {
        alert("Cancelada")
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
                <option value="Low">Baja</option>
                <option value="Medium">Media</option>
                <option value="High">Alta</option>
            </select></p>

            <button onClick={createTask}>Asignar tarea</button>
            <button onClick={cancelNewTask}>Cancelar</button>
        </div>
    );
}