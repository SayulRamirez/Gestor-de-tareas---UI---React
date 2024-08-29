import {useState} from "react";
import {NewTask} from "./NewTask.jsx";
import {Report} from "./Report.jsx";

export const Project = () => {

    function showNewTask() {
        return (
            <NewTask newTask/>
        );
    }

    function showGenerateReport() {
        return (
            <Report report/>
        );
    }

    function updateStatus() {
        return (
            <div>
                <p>Change status</p>
            </div>
        );
    }

    function deleteProject() {
        return (
            <div>
                <p>Deleting project</p>
            </div>
        );
    }

    function showOption(event) {
        event.preventDefault();

        let textButton = event.target.textContent;

        switch (textButton) {
            case "Asignar tarea":
                setSetUp(showNewTask());
                break;
            case "Generar reporte":
                setSetUp(showGenerateReport());
                break;
            case "Actualizar estatus":
                setSetUp(updateStatus());
                break;
            case "Eliminar proyecto":
                setSetUp(deleteProject());
                break;
        }
    }

    const [setup, setSetUp] = useState();

    return (
        <div>
            <div>
                <button onClick={showOption}>Asignar tarea</button>
                <button onClick={showOption}>Generar reporte</button>
                <button onClick={showOption}>Actualizar estatus</button>
                <button onClick={showOption}>Eliminar proyecto</button>
            </div>

            <h3>Detalles del Proyecto</h3>
            <p>Titulo del proyecto</p>
            <p>Descripción del proyceto</p>
            <p>Entrega estimada</p>
            <select>
                <option>Pendiente</option>
                <option>En progreso</option>
                <option>Completa</option>
            </select>
            {setup}
        </div>
    );
};

