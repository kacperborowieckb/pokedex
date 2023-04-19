import Home from './components/Home/Home';
import PokemonSite from './components/PokemonSite/PokemonSite';
import Layout from './components/Layout/Layout';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const typeColors = {
    fire: '#EE8130',
    grass: '#7AC74C',
    electric: '#F7D02C',
    water: '#6390F0',
    ground: '#E2BF65',
    rock: '#B6A136',
    fairy: '#D685AD',
    poison: '#A33EA1',
    bug: '#A6B91A',
    dragon: '#6F35FC',
    psychic: '#F95587',
    flying: '#A98FF3',
    fighting: '#C22E28',
    normal: '#A8A77A',
    ice: '#96D9D6',
    ghost: '#735797',
    dark: '#705746',
    steel: '#B7B7CE',
  };

  return (
    <Routes>
      <Route path="/" element={<Layout pokemons={pokemons} typeColors={typeColors} />}>
        <Route
          index
          element={<Home pokemons={pokemons} setPokemons={setPokemons} typeColors={typeColors} />}
        />
        <Route path=":pokemon">
          <Route index element={<PokemonSite />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
