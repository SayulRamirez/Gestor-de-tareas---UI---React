import {useState} from "react";
import Auth from "../services/Auth.js";
import {Link, useNavigate} from "react-router-dom";

export const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [maternalSurname, setMaternalSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function registerUser() {

        const register = {
            first_name: firstName,
            last_name: lastName,
            maternal_surname: maternalSurname,
            phone_number: phoneNumber,
            email: email,
            password: password
        };

        Auth.register(register).then(response => {

            if (response.status === 400) {
                alert("Debes de llenar todos los campos");
                return;
            }

            if (response.status === 200) {
                alert("Registro exitoso");
                navigate("/login");
            }
        }).catch(error => {
            console.error('Error al registrar el usuario: ', error)
            alert("Ocurrio un problema, por favor intente más tarde.")
        })
    }

    return (
        <div>
            <h1>Registro de una cuenta nueva.</h1>
            <p>Nombre(s): <input type='text' name='firstName' value={firstName}
                                 onChange={e => setFirstName(e.target.value)}/></p>
            <p>Apellido paterno: <input type='text' name='lastName' value={lastName}
                                        onChange={e => setLastName(e.target.value)}/></p>
            <p>Apellido materno: <input type='text' name='maternalSurname' value={maternalSurname}
                                        onChange={e => setMaternalSurname(e.target.value)}/></p>
            <p>Teléfono: <input type='numeric' name='phoneNumber' value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}/></p>
            <hr/>
            <h3>Datos para el inicio de sesión</h3>
            <p>Email: <input type='email' name='email' value={email}
                             onChange={e => setEmail(e.target.value)}/></p>
            <p>Contraseña: <input type='password' name='password' value={password}
                              onChange={e => setPassword(e.target.value)}/></p>
            <button onClick={registerUser}>Registrar</button>
            <Link to='/login'>Cancelar</Link>
        </div>
    );
}
