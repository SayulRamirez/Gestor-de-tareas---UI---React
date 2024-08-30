import {useState} from "react";

export const Task = () => {

    const [status, setStatus] = useState('')

    function showData() {
        alert(status);
    }

    return (
        <div>
            <p>Any title</p>
            <p>Any description</p>
            <p>Any status:
                <select onChange={e => setStatus(e.target.value)}>
                    <option value={status}/>
                    <option value='en progreso'/>
                    <option value='pendiente'/>
                    <option value='completa'/>
                </select>
            </p>
             <p>Any date</p>
            <p>Any priority</p>
            <p>Any date create</p>
            <p>Any runtime</p>
            <button onClick={showData}/>
        </div>
    );
}