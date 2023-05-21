import React from "react";
import './menudropdown.css';
import Deadpool1 from "./Deadpool1.png";
import ironman from "./ironman.png";
import mole from "./thing.png";
import Venom from "./Venom.png";
import captain from "./Captain.jpg";
import Wolverine from "./Wolverine.png";

const MenuDropDownper = () => {    

    return (
        <div className='dropdownmenu'>
           <p className="titulomenu">PERSONAJES</p>
            <div className="menucards">
                <div className="panelcards">
                    <div className="card cards">
                        <img src={Deadpool1} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Deadpool</span>
                    </div>
                </div>                
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={ironman} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>ironman</span>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={mole} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>mole</span>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={Venom} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Venom</span>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={captain} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>captain</span>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={Wolverine} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Wolverine</span>
                    </div>
                </div>
           </div>
        </div>

    );
}

export default MenuDropDownper;