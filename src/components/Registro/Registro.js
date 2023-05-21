import './Registro.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';
import { useState } from 'react';
import Botonflotante from "../Botonflotante/botonflotante";

export default function Registro() {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [contrasenaConfirm, setContrasenaConfirm] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleInputChange =(e) => {
        
        const { name, value } = e.target;

        switch(name){
            case 'nombres':
                setNombres(value);
            break
            case 'apellidos':
                setApellidos(value);
            break
            case 'email':
                setEmail(value);
            break
            case 'fechaNacimiento':
                setFechaNacimiento(value);
            break
            case 'contrasena':
                setContrasena(value);
            break
            case 'contrasenaConfirm':
                setContrasenaConfirm(value);
            break
            default:
                break
        }

    };
    
    return (
        <> 
        <div className='App'>
            <div><Navmenu /></div>
            <div className="registro">
                <h1> REGISTRARSE </h1>
                <form onSubmit={handleInputChange}>
                    <div className='fila'>
                        <div className='colone'>
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text" id="nombres"value={nombres}
                                onChange={(e) => setNombres(e.target.value)} required/>
                        </div>
                        <div className='coltwo'>
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" id="apellidos" value={apellidos}
                                onChange={(e) => setApellidos(e.target.value)} required />
                        </div>
                    </div>  
                    <div className='fila'>
                        <div className='colone'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className='coltwo'>
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento: </label>
                            <input type="date" id="fechaNacimiento" value={fechaNacimiento}
                                onChange={(e) => setFechaNacimiento(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='fila'>
                        <div className='colone'>
                        <label htmlFor="contrasena">Contraseña </label>
                        <input type="password" id="contrasena" value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)} required/>
                        </div>
                        <div className='coltwo'>
                            <label htmlFor="contrasenaConfirm">Confirmar contraseña </label>
                            <input type="password" id="contrasenaConfirm" value={contrasenaConfirm}
                                onChange={(e) => setContrasenaConfirm(e.target.value)} required/>  
                        </div>                      
                    </div>
                    <div className='filaterminos'>
                        <div className='colcheck'>
                            <input className='checkbox' type="checkbox" id="aceptaTerminos" checked={aceptaTerminos}
                                onChange={(e) => setAceptaTerminos(e.target.value)} required/>
                         </div>
                        <div className='colterminos'>
                            <label htmlFor="aceptaTerminos">
                            He leído y acepto los <a href='#'>Terminos de Uso</a>, así como la <a href='#'> Politica de privacidad</a>
                        </label>
                        </div>
                    </div>
                    <div className="center">
                            <button type="submit">Crear Cuenta</button>
                    </div>
                    
                </form>
            </div>
            <Botonflotante />
                <div className='footerpage'><Footerpage /></div>
                
            </div>
        </>
    );
  }
