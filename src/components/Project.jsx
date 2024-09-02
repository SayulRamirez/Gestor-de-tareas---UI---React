import {useEffect, useState} from "react";
import ProjectService from "../services/Project.js";
import {Link, useNavigate, useParams} from "react-router-dom";

export const Project = () => {

    const [titleProject, setTitleProject] = useState("");
    const [descriptionProject, setDescriptionProject] = useState("");
    const [estimatedCompletion, setEstimatedCompletion] = useState("");
    const [statusProject, setStatusProject] = useState("");
    const [idProject, setIdProject] = useState("");

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        ProjectService.getProject(id).then(response => {
            setIdProject(response.data.id);
            setTitleProject(response.data.title);
            setDescriptionProject(response.data.description);
            setEstimatedCompletion(response.data.estimated_completion);
            setStatusProject(response.data.status);
            console.log(response.data)
        }).catch(error =>
            console.error(error));
    }, [id]);

    function updateStatus() {
        const request = {
            id: idProject,
            status: statusProject
        }

        ProjectService.updateStatus(request).then(response => {
            setIdProject(response.data.id);
            setTitleProject(response.data.title);
            setDescriptionProject(response.data.description);
            setEstimatedCompletion(response.data.estimated_completion);
            setStatusProject(response.data.status);
            console.log(response.data)
        }).catch(error =>
            console.error(error));
    }

    function deleteProject() {
        ProjectService.deleteProject(idProject).then(response => {
            if (response.data.status === 404) {
                navigate("/reception");
            }
        }).catch(() => {
            navigate("/reception");
        })
    }

    return (
        <div>
            <div>
                <Link to={'/reception'}>Regresar</Link>
                <Link to={`/tasks/${idProject}`}>Asignar tarea</Link>
                <Link to={`/report/${idProject}`}>Generar reporte</Link>
                <button onClick={updateStatus}>Actualizar estatus</button>
                <button onClick={deleteProject}>Eliminar proyecto</button>
            </div>
            <div>
            <h3>Detalles del Proyecto</h3>
                <p>{titleProject}</p>
                <p>{descriptionProject}</p>
                <p>{estimatedCompletion}</p>
                <select value={statusProject} onChange={e => setStatusProject(e.target.value)}>
                    <option value='PENDING'>Pendiente</option>
                    <option value='IN_PROGRESS'>En progreso</option>
                    <option value='COMPLETE'>Completo</option>
                </select>
            </div>
        </div>
    );
};

