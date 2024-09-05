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
            <nav className='navbar justify-content-center bg-body-tertiary mb-5 bg-dark-subtle'>
                <Link to={'/reception'} className='btn btn-primary mx-2'>Regresar</Link>
                <Link to={`/tasks/${idProject}`} className='btn btn-info mx-2'>Asignar tarea</Link>
                <Link to={`/report/${idProject}`} className='btn btn-success mx-2'>Generar reporte</Link>
                <button onClick={updateStatus} className='btn btn-warning mx-2'>Actualizar estatus</button>
                <button onClick={deleteProject} className='btn btn-danger mx-2'>Eliminar proyecto</button>
            </nav>
            <div>
                <h3>Detalles del Proyecto</h3>
            </div>
            <div className='mt-3'>
                <div className='mb-2 col'>
                    <label className='mb-2 row text-lg-start'>Titulo: {titleProject}</label>
                </div>
                <div className='mb-2 col'>
                    <label className='mb-2 row text-lg-start'>Descripción: {descriptionProject}</label>
                </div>
                <div className='mb-2 col'>
                    <label className='mb-2 row text-lg-start'>Entrega estimada: {estimatedCompletion}</label>
                </div>
                <div className='mb-2 col'>
                    <label form='status' className='mb-2 row text-lg-start'>Estatus:</label>
                    <div className='col-sm-8'>
                        <select name='status' id='status' className='mb-2 row form-select'
                                value={statusProject}
                                onChange={e => setStatusProject(e.target.value)}>
                            <option value='PENDING'>Pendiente</option>
                            <option value='IN_PROGRESS'>En progreso</option>
                            <option value='COMPLETE'>Completo</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

