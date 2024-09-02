import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getIdFromToken} from "../utils/getIdFromToken.js";
import Project from "../services/Project.js";

export const NewProject = () => {

    const [titleProject, setTitleProject] = useState('');
    const [descriptionProject, setDescriptionProject] = useState('');
    const [dateEstimate, setDateEstimate] = useState('');

    const navigate = useNavigate();

    function createProject(event) {
        event.preventDefault();

        const id = getIdFromToken();

        const request = {
            title: titleProject,
            description: descriptionProject,
            leader: id,
            estimate_completion: dateEstimate
        }
        console.log(request);

        Project.createProject(request).then(response => {
            if(response.status === 201) {
                navigate("/reception");
                return;
            }

            alert("Ocurrio un error, vuelve a intentar.");
        }).catch(error => {
            alert("Ocurrio un error, vuelve a intentar más tarde.")
            console.error("Error: ", error);
        })
    }

    return(
        <div>
            <form onSubmit={createProject}>
                <p>Título: <input type='text' name='titleProject' value={titleProject}
                                  onChange={e => setTitleProject(e.target.value)}/></p>
                <p>Descripción: <textarea name='descriptionProject' value={descriptionProject} maxLength='255'
                                  onChange={e => setDescriptionProject(e.target.value)}/></p>
                <p>Entrega estimada: <input type="date" name="dateEstimate" value={dateEstimate}
                                            onChange={e => setDateEstimate(e.target.value)}/></p>
                <button type='submit'>Crear</button>
                <Link to={`/reception`}>Cancelar</Link>
            </form>
        </div>
    );
}