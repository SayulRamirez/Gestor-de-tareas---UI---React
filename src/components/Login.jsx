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
        <div className="card">
            <h1>Login</h1>
            <form onSubmit={login}>
                <p>Usuario: <input type='email'
                                   name='email'
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>Contraseña: <input type='password'
                                      name='password'
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <button type='submit'>Ingresar</button>
            </form>
            <p>¿Aun no tienes cuenta? <Link to='/register'>da click aquí</Link></p>
        </div>
    );
}
