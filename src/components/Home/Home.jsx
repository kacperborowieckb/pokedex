import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../Card/Card';
import './home.scss';

const Home = () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const [pokemons, setPokemons] = useState([]);
  const [itemsPerSide, setItemsPerSide] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchSinglePokemon = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    const fetchPokemons = async () => {
      try {
        const response = await axios.get(API_URL);
        const pokemons = [];
        for (let item of response.data.results) {
          const pokemonData = await fetchSinglePokemon(item.url);
          pokemons.push(pokemonData);
        }
        setPokemons(pokemons);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <main className="home">
      {pokemons
        .slice(itemsPerSide * currentPage, itemsPerSide * (currentPage + 1))
        .map((pokemon, i) => (
          <Card key={i} pokemon={pokemon} />
        ))}
    </main>
  );
};

export default Home;
