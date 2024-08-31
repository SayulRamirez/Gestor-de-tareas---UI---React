import {useEffect, useState} from "react";
import Project from "../services/Project.js";
import {Link} from "react-router-dom";

export const Main = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Project.getAllProjects().then(response => {
            setProjects(response.data);
        }).catch(error => {
            console.error("Error fetching projects:", error);
        });
    }, []);

    return (
        <div>
            <div>
                <button>Nuevo proyecto</button>
                <button>Mis proyectos</button>
                <button>Mis tareas</button>
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