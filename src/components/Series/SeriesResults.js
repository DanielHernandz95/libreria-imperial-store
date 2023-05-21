import './SeriesResults.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';
import Botonflotante from "../Botonflotante/botonflotante";

export default function SeriesResults({series}) {
    
    async function fetchdata  () {

        const apiSeries = await fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=title&limit=40&apikey=ce5e35bd1877a12f428c86ef6cb4c39e&ts=1&hash=083897e2f6ed21de6b319359948daff6');
        
        const apiSeriesResult = await apiSeries.json();

        const {data} = apiSeriesResult;

        document.getElementById("cardsContainer").innerHTML = "";

        const results = data.results; 

        console.log(results);

        let card = "";

        results.map((serie, index) => {
            
            if(!(serie.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"))
            {
                card = `<div class="serie-container" key=${index}>
                <div>
                    <img src="${serie.thumbnail.path+"."+serie.thumbnail.extension}" alt =""/> 
                </div>
                <div>
                    <h3>${serie.title}</h3>
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
            <div className="series">
                <h1> SERIES </h1>
            <div className="container-series" id="cardsContainer"></div>
            </div>
            <Botonflotante />
            <div className='footerpage'><Footerpage /></div>
            </div>
        </>
    )
  }