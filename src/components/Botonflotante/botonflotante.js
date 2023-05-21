import './botonflotante.css';
import Botonf from './boton-mas-info.png';

const Botonflotante = () => {
  return (
    <a href="/landing" target="_blank" >
        <img src={Botonf} alt="Botonf" className='boton-flotante' />
    </a>
  );
}

export default Botonflotante;


