import React from "react";
import './menudropdown.css';
import Comic1 from "./Comic1.png";
import Comic2 from "./Comic2.png";
import Comic3 from "./Comic3.png";
import Comic4 from "./Comic4.png";

const MenuDropDowncom = () => {    

    return (
        <div className='dropdownmenu'>           
            <p className="titulomenu">COMICS RECIENTES</p>
            <div className="menucards">
                <div className="panelcards">
                    <div className="card cards">
                        <img src={Comic1} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Avengers: Beyond #2</span>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={Comic2} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Wasp #4</span>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={Comic3} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Miracleman: Tales #1</span>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={Comic4} alt="imagenbanner" className='imgmenu imgmenumax' id="logoimperial" />
                        <span>Doctor Strange #2</span>
                    </div>
                </div>                
           </div>   
        </div>

    );
}

export default MenuDropDowncom;