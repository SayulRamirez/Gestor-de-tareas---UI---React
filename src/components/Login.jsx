import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Auth from "../services/Auth.js";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function login(event) {

        event.preventDefault();

        const request = {
            email: email,
            password: password
        }

        Auth.login(request).then(response => {
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate("/reception");
            }
        }).catch(error => {
            console.error("Error en la solicitud:", error.response ? error.response.data : error.message)
        })
    }

    return(
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className='mb-4 row'>
                    <label form='email' className='col-sm-2 col-form-label'>Email:</label>
                    <div className='col-sm-12'>
                        <input type='email' className='form-control'
                               id='email' name='email' value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label form='password' className='col-sm-2 col-form-label'>Contraseña:</label>
                    <div className='col-sm-12'>
                        <input type='password'
                               className='form-control'
                               id='password'
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary btn-lg'>Ingresar</button>
            </form>
            <p className='lead p-3'>¿Aun no tienes cuenta? <Link to='/register'>da click aquí</Link></p>
        </div>
    );
}
