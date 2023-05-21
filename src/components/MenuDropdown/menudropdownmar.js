import React from "react";
import './menudropdown.css';
import marvel1 from "./marvel1.jpg";
import marvel2 from "./marvel2.jpg";
import marvel3 from "./marvel3.png";
import marvel4 from "./marvel4.png";

const MenuDropDownmar = () => {    

    return (
        <div className='dropdownmenu'>
          <p className="titulomenu">MARVEL</p>
            <div className="menucards">
                <div className="panelcards">
                    <div className="card cards">
                        <img src={marvel1} alt="imagenbanner" className='imgmenumin' id="logoimperial" />
                        <span>Comics</span>
                        <p>La clave del futuro de los X-Men yace en las cenizas del pasado de Jean Grey en la nueva serie en solitario de 'Jean Grey'</p>
                    </div>
                </div>                
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={marvel2} alt="imagenbanner" className='imgmenumin' id="logoimperial" />
                        <span>Comics</span>
                        <p>Los títulos del Día del cómic gratuito de Marvel dan inicio a 'Fall of X', 'GODS', 'Ultimate Invasion' y más este sábado</p>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={marvel3} alt="imagenbanner" className='imgmenumin' id="logoimperial" />
                        <span>Peliculas</span>
                        <p>El elenco de 'Guardianes de la Galaxia Vol. 3' revelan sus canciones favoritas en la película</p>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={marvel4} alt="imagenbanner" className='imgmenumin' id="logoimperial" />
                        <span>Cultura y estílo de vida</span>
                        <p>'Guardianes de la galaxia vol. 3' aterriza en Funko Hollywood</p>
                    </div>
                </div>
           </div>
        </div>

    );
}

export default MenuDropDownmar;