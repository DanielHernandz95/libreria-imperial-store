import React from "react";
import './landing.css';
import heroes from './superhero.png';
import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';
import person4 from './person4.jpg';
import banner from './BannerLanding.png';

const Landing = () => {    

    return (
        <>
        <div className="landingcontainer">
            <div className='landing'>
                <h1>¡DEBES SER PARTE DE LOS HÉROES MARVEL!</h1>
                <h2>¡CONOCE TODAS ESTAS EPICAS HISTORIAS!</h2>
                <img src={heroes} alt="heroes" className='heroes' id="heroes" />
                <h2>¡TESTIMONIOS DE FANS CONVIRTIÉNDOSE EN HÉROES!</h2>               
                <div className="testimonios">
                    
                        <div className="card people">
                            <img src={person1} alt="person" className='person'/> 
                            <i>"Tienen todos los personajes que me encantan, amo esta"</i>  
                            <span>-CAMILA FERNANDEZ-</span>                    
                        </div>                     
                   
                        <div className="card people">
                            <img src={person2} alt="person" className='person'/> 
                            <i>"Sus precios son Únicos, y su atención es como ellos afirman: 'heróica'."</i>  
                            <span>-ALISON BELTRAN-</span>                     
                        </div>                     
                    
                        <div className="card people">
                            <img src={person3} alt="person" className='person'/> 
                            <i>"Se encuentran comics que son dificiles de conseguir a un excelente precio."</i> 
                            <span>-PABLO FERRER-</span>                     
                        </div>                     
                    
                        <div className="card people">
                            <img src={person4} alt="person" className='person'/> 
                            <i>"¡Deben comprar aquí!</i> <i> Brindan un perfecto servicio, no se arrepentiran.</i><i> Gracias tienda imperial."  </i> 
                            <span>-JOHNATHAN PEREZ-</span>                     
                        </div>
                </div> 
                <div className="containerbanner"><img src={banner} alt="reader" className='reader'/>  
                    <div className="contactanos"> <h2><b>¡ES UNA TIENDA DE HÉROES!</b></h2> 
                    <h2>Incluso ellos nos leén, Conviértete ahora y contactanos.</h2>
                    <h2 className="unete">Unete al imperio de la</h2>
                    <h2 className="unete"><b>LIBRERIA IMPERIAL</b></h2>   
                    <div className="center">
                            <button className="botoncontact" type="submit">Contáctanos</button>
                    </div>
                     </div>   
                </div>                         
           </div>            
        </div>
        </>
    );
}

export default Landing;