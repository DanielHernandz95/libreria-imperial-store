import React, { useState } from 'react';
import './Login.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';
import Botonflotante from "../Botonflotante/botonflotante";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === '') {
            setError('Por favor, ingresa tu nombre de usuario');
            return;
        }

        if (password.trim() === '') {
            setError('Por favor, ingresa tu contraseña');
            return;
        }

        if (username === 'DiseñoInterfaces' && password === 'd1s3ñ0123') {
            console.log('Inicio de sesión exitoso');
            window.location.href = '/';
        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }

        setUsername('');
        setPassword('');
    };

    return (
        <>
            <div className="App">
                <div><Navmenu /></div>
                    <div className='login'>
                        <h1>INICIAR SESIÓN</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Usuario:</label>
                                <input type="text" id="username" value={username}
                                    onChange={handleUsernameChange}/>
                            </div>
                            <div>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password" value={password}
                                    onChange={handlePasswordChange}/>
                            </div>
                            {error && <p className="error">{error}</p>}
                            <div className="center">
                                <button type="submit">Ingresa</button>
                            </div>
                            <div className="forgot">
                                <label>
                                    <a href="#"><strong><u className='subrayarTerminos'>¿Olvidaste la contraseña?</u></strong></a>
                                </label>
                        </div>
                            
                        </form>
                        <div className='crearcuenta'>
                            <label >
                                <a href="#"><strong><u className='subrayarTerminos'>¿Aún no tienes una cuenta?</u></strong></a>
                            </label>                            
                        
                            <div className="center2">
                                <button type="submit">Crear Cuenta</button>
                            </div>
                        </div>
                    </div>
                    <Botonflotante />
                <div className="footerpage"><Footerpage /></div>
            </div>
        </>
    );
}