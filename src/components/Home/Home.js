import React from "react";
import './Home.css';
import BannerHome from './Banner';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';
import Botonflotante from "../Botonflotante/botonflotante";

const Home = () => {    

    return (
        <>
        <div className="App">
            <div><Navmenu /></div>
            <div className='home'>
                <div className="bannerhome"><BannerHome /></div>
                <div className="sectionone">
                <span className="titlesection">¡Conoce lo que <br/> &ensp;&emsp;tenemos para ti</span>  
                </div>
            </div>
            <div className='footerpage'><Footerpage /></div>
        </div>
        <Botonflotante />
        </>
    );
}

export default Home;