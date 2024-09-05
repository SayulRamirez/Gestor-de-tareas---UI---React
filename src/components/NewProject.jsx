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
            <h1>Crear nuevo proyecto</h1>
            <form onSubmit={createProject}>
                <div className='mb-2 row'>
                    <label form='titleProject' className='col-sm-2 col-form-label'>Título:</label>
                    <div className='col-sm-12'>
                        <input type='text' name='titleProject' id='titleProject' className='form-control'
                               value={titleProject}
                               onChange={e => setTitleProject(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-2 row'>
                    <label form='descriptionProject' className='col-sm-2 col-form-label'>Descripción:</label>
                    <div className='col-sm-12'>
                        <textarea name='descriptionProject' id='descriptionProject' className='form-control'
                                  value={descriptionProject}
                                  onChange={e => setDescriptionProject(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-2 row'>
                    <label form='dateEstimate' className='col-sm-4 col-form-label'>Entrega estimada:</label>
                    <div className='col-sm-12'>
                        <input type='date' name='dateEstimate' id='dateEstimate' className='form-control'
                                  value={dateEstimate}
                                  onChange={e => setDateEstimate(e.target.value)}/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary btn-lg mx-3'>Crear</button>
                <Link to={`/reception`} className='btn btn-danger btn-lg'>Cancelar</Link>
            </form>
        </div>
    );
}