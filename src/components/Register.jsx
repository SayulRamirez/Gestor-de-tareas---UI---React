import {useState} from "react";

export const Register = () => {

    const [nameUser, setNameUser] = useState('');
    const [lastName, setLastName] = useState('');
    const [maternalSurname, setMaternalSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function showData() {
        alert(nameUser + ' ' + lastName + ' ' + maternalSurname + ' ' + phoneNumber + ' ' + email + ' ' + password);
    }

    return (
        <div>
            <h1>Registro de una cuenta nueva.</h1>
            <p>Nombre(s): <input type='text' name='nameUser' value={nameUser}
                                 onChange={e => setNameUser(e.target.value)}/></p>
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
            <p>Nombre: <input type='text' name='password' value={password}
                              onChange={e => setPassword(e.target.value)}/></p>
            <button onClick={showData}>Registrar</button>
            <button>Cancelar</button>
        </div>
    );
}
