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
            <div>
                <Link to={`/project/new`}>Nuevo proyecto</Link>
                <Link to={`/reception`}>Mis proyectos</Link>
                <Link to={`/tasks/all/${id}`}>Mis tareas</Link>
            </div>
            {projects.map(project => (
                    <Link to={`/project/${project.id}`} key={project.id}>
                        <p>Título: {project.title}</p>
                        <p>Estatus: {project.status}</p>
                    </Link>
            ))}
        </div>
    );
}