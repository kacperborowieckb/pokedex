import Home from './components/Home/Home';
import PokemonSite from './components/PokemonSite/PokemonSite';
import Layout from './components/Layout/Layout';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Layout pokemons={pokemons} />}>
        <Route index element={<Home pokemons={pokemons} setPokemons={setPokemons} />} />
        <Route path=":pokemon">
          <Route index element={<PokemonSite />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
