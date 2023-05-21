
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ComicResults from './components/Comics/ComicResults';
import PersonajesResults from './components/Personajes/PersonajesResults';
import SeriesResults from './components/Series/SeriesResults';
import Registro from './components/Registro/Registro';
import Login from './components/Login/Login';
import Landing from './components/Landing/landing';
import './components/Home/Home.css';
import './components/menu/Navmenu.css';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/comics" element={<ComicResults/>} />
          <Route path="/personajes" element={<PersonajesResults/>} />
          <Route path="/series" element={<SeriesResults/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/landing" element={<Landing/>} />
       </Routes>
    </>
  );
}

export default App;
