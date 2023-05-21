import './PersonajesResults.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';
import Botonflotante from "../Botonflotante/botonflotante";

export default function PersonajesResults({personajes}) {

    async function fetchdata  () {

        const apiPersonajes = await fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=40&apikey=ce5e35bd1877a12f428c86ef6cb4c39e&ts=1&hash=083897e2f6ed21de6b319359948daff6');

        const apiPersonajesResult = await apiPersonajes.json();

        const {data} = apiPersonajesResult;

        document.getElementById("cardsContainer").innerHTML = "";

        const results = data.results; 
        
        let card = "";

        results.map((personaje, index) => {
            
            if(!(personaje.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"))
            {
                card = `<div class="personaje-container" key=${index}>
                <div>
                    <img src="${personaje.thumbnail.path+"."+personaje.thumbnail.extension}" alt =""/> 
                </div>
                <div>
                    <h3>${personaje.name}</h3>
                </div>
                </div>`
                document.getElementById("cardsContainer").insertAdjacentHTML('beforeend', card);
            }
        }
        )
        
    }

    fetchdata()

    return (
        <>
        <div className='App'>
            <div><Navmenu /></div>
            <div className="personajes">
                <h1> PERSONAJES </h1>
                <div className="container-personajes" id="cardsContainer"></div>
            </div>
            <Botonflotante />
            <div className='footerpage'><Footerpage /></div>
            </div>
        </>
    )
  }