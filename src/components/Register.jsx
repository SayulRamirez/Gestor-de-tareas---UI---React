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
            <form onSubmit={registerUser}>
                <div className='mb-2 row'>
                    <label form='name' className='col-sm-2 col-form-label'>Nombre(s):</label>
                    <div className='col-sm-12'>
                        <input type='text' name='firstName' id='name' className='form-control' value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-2 row'>
                    <label form='lastName' className='col-sm-3 col-form-label'>Apellido paterno:</label>
                    <div className='col-sm-12'>
                        <input type='text' name='lastName' id='lastName' className='form-control' value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-2 row'>
                    <label form='maternalSurname' className='col-sm-3 col-form-label'>Apellido materno:</label>
                    <div className='col-sm-12'>
                        <input type='text' name='maternalSurname' id='manternalSurname' className='form-control'
                               value={maternalSurname}
                               onChange={e => setMaternalSurname(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-2 row'>
                    <label form='phoneNumber' className='col-sm-2 col-form-label'>Teléfono:</label>
                    <div className='col-sm-12'>
                        <input type='text' name='phoneNumber' id='phoneNumber' className='form-control'
                               value={phoneNumber}
                               onChange={e => setPhoneNumber(e.target.value)}/>
                    </div>
                </div>
                <hr/>
                <h3>Datos para el inicio de sesión</h3>
                <div className='mb-2 row'>
                    <label form='email' className='col-sm-2 col-form-label'>Correo:</label>
                    <div className='col-sm-12'>
                        <input type='email' name='email' id='email' className='form-control'
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='mb-2 row'>
                    <label form='password' className='col-sm-2 col-form-label'>Contraseña:</label>
                    <div className='col-sm-12'>
                        <input type='password' name='password' id='password' className='form-control'
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary btn-lg mx-5'>Registrar</button>
                <Link to='/login' className='btn btn-danger btn-lg'>Cancelar</Link>
            </form>
        </div>
    );
}
