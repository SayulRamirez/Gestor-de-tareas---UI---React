import {useState} from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function showCredentials() {
        alert(email + ' ' + password);
    }

    return(
        <>
            <div className="card">
                <h1>Login</h1>
                <form>
                    <p>Usuario: <input type='email'
                                       name='email'
                                       value={email} onChange={(e) => setEmail(e.target.value)} />
                    </p>
                    <p>Contraseña: <input type='text'
                                          name='password'
                                          value={password} onChange={(e) => setPassword(e.target.value)}/></p>
                    <button onClick={showCredentials}>Ingresar</button>
                </form>
                <p>¿Aun no tienes cuenta? da click <a href='Register.jsx'>aquí</a></p>
            </div>
        </>
    );
}
