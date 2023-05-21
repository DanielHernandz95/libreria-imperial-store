import React from "react";
import './menudropdown.css';
import novedaduno from "./novedades1.jpg";
import capitan from "./capitan.png";
import deadpool from "./deadpool.png";

const MenuDropDownnov = () => {    

    return (
        <div className='dropdownmenu'>
            <p className="titulomenu">LO ULTIMO EN LIBRERIA IMPERIAL</p>
            <div className="menucards">
                <div className="panelcards">
                    <div className="card cards">
                        <img src={novedaduno} alt="imagenbanner" className='imgmenu' id="logoimperial" />
                        <span>Marvel</span>
                        <p>Lanzamiento de la pelicula guardianes de la galaxia Vol. 3</p>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={capitan} alt="imagenbanner" className='imgmenu' id="logoimperial" />
                        <span>Comics</span>
                        <p>Capitán America #14</p>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={deadpool} alt="imagenbanner" className='imgmenu' id="logoimperial" />
                        <span>Comics</span>
                        <p>Deadpool #48</p>
                    </div>
                </div>
           </div>            
        </div>

    );
}

export default MenuDropDownnov;