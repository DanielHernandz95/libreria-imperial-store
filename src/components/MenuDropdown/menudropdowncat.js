import React from "react";
import './menudropdown.css';
import xmen from "./xmen.jpg";
import cuatrofantasticos from "./cuatrofantasticos.jpg";
import avengers from "./avengers.jpg";
import spiderman from "./spider-man.jpg";

const MenuDropDowncat = () => {    

    return (
        <div className='dropdownmenu'>
           <p className="titulomenu">SERIES</p>
            <div className="menucards">
                <div className="panelcards">
                    <div className="card cards">
                        <img src={xmen} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>X-Men</span>
                    </div>
                </div>                
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={cuatrofantasticos} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>4 Fantasticos</span>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={avengers} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Avengers</span>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={spiderman} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Spider-Man</span>
                    </div>
                </div>                
           </div>           
        </div>
    );
}

export default MenuDropDowncat;