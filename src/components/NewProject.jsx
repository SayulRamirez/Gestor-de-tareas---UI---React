import {useState} from "react";

export const NewProject = () => {

    const [titleProject, setTitleProject] = useState('');
    const [descriptionProject, setDescriptionProject] = useState('');
    const [dateEstimate, setDateEstimate] = useState('');

    function showData() {
        alert(titleProject + ' ' + descriptionProject + ' ' + dateEstimate);
    }
    return(
        <div>
            <form>
                <p>Título: <input type='text' name='titleProject' value={titleProject}
                                  onChange={e => setTitleProject(e.target.value)}/></p>
                <p>Descripción: <textarea name='descriptionProject' value={descriptionProject} maxLength='255'
                                  onChange={e => setDescriptionProject(e.target.value)}/></p>
                <p>Entrega estimada: <input type="date" name="dateEstimate" value={dateEstimate}
                                            onChange={e => setDateEstimate(e.target.value)}/></p>
                <button onClick={showData}>Crear</button>
                <button>Cancelar</button>
            </form>
        </div>
    );
}