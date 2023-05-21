import React from "react";
import './Navmenu.css';
import logoimperial from './logo-imperial.png';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuDropDownnov from '../MenuDropdown/menudropdownnov';
import MenuDropDowncom from '../MenuDropdown/menudropdowncom';
import MenuDropDowncat from '../MenuDropdown/menudropdowncat';
import MenuDropDownmar from '../MenuDropdown/menudropdownmar';
import MenuDropDownper from '../MenuDropdown/menudropdownper';



const Navmenu = () => {    

    return (
        <div className="containermenu">
            <div className='menus'>
                <div className='logo'>
                <a href="/"><img src={logoimperial} alt="logoimperial" className='logoimperial' id="logoimperial" /></a>
                </div>
                <div className='menubars'>
                    <div className='menutop'>
                        <nav className="navigatortop">
                            <ul>
                                <li>Ayuda</li>
                                <li>Contacto</li>
                                <li><a href="/registro">Registrarse</a></li>                            
                            </ul>
                        </nav>
                    </div>
                    <div className='menubottom'>                    
                        <nav className="navigatorbottom">
                            <div className="navigator"> 
                                <ul>
                                    <li className="itemmenu">Novedades</li>
                                    <div className="dropdownm"><MenuDropDownnov /></div>
                                    <li className="itemmenu"><a  href="/comics">Comics</a></li>
                                    <div className="dropdownm"><MenuDropDowncom /></div>
                                    <li className="itemmenu"><a href="/series">Series</a></li>
                                    <div className="dropdownm"><MenuDropDowncat /></div>
                                    <li className="itemmarvel itemmenu"><a href="https://www.marvel.com/">Marvel</a></li>
                                    <div className="dropdownm"><MenuDropDownmar /></div>
                                    <li className="itemmenu"><a href="/personajes">Personajes</a></li>
                                    <div className="dropdownm"><MenuDropDownper /></div>
                                </ul>
                            </div>
                            <div className="iconosnav">
                                <ul>
                                    <li className="iconos"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>                                
                                    <li className="iconos"><a href="/login"><FontAwesomeIcon icon={faUser} /></a></li>     
                                    <li className="iconos"><FontAwesomeIcon icon={faCartShopping} /></li>                       
                                </ul>
                            </div>                            
                        </nav>
                    </div>
                </div>                
            </div>        
        </div>
        
    );
}

export default Navmenu;