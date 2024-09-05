import {useEffect, useState} from "react";
import ProjectService from "../services/Project.js";
import {Link} from "react-router-dom";
import {getIdFromToken} from "../utils/getIdFromToken.js";

export const Main = () => {

    const [projects, setProjects] = useState([]);

    const id = getIdFromToken();

    useEffect(() => {
        ProjectService.getAllProjects().then(response => {
            setProjects(response.data);
        }).catch(error => {
            console.error("Error fetching projects:", error);
        });
    }, []);

    return (
        <div>
            <nav className='navbar justify-content-center bg-body-tertiary mb-5 bg-dark-subtle'>
                <Link to={`/reception`} className='btn btn-success mx-2'>Gestor de tareas</Link>
                <Link to={`/project/new`} className='btn btn-success mx-2'>Nuevo proyecto</Link>
                <Link to={`/reception`} className='btn btn-success mx-2'>Mis proyectos</Link>
                <Link to={`/tasks/all/${id}`} className='btn btn-success mx-2'>Mis tareas</Link>
            </nav>

            <div className='row justify-content-center'>
                {projects.map(project => (
                    <div className='col-sm-3 mb-5 m-1 p-1 border border-success' key={project.id}>
                        <div className='card-body'>
                            <h5 className='card-title'>Título: {project.title}</h5>
                            <p className='card-text'>Estatus: {project.status}</p>
                            <Link to={`/project/${project.id}`} className='btn btn-primary'>Ver detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}