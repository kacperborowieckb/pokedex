import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../styles/main.scss';
import './pokemonSite.scss';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import SkeletonCard from '../../components/SkeletorCard/SkeletonCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const PokemonSite = ({ typeColors, MAX_POKEMONS }) => {
  let { pokemon: pokemonName } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPokemons, setNextPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const pokemon = await axios.get(API_URL + pokemonName.toLowerCase());
        const previousPokemon = await axios.get(
          API_URL + (pokemon.data.id === 1 ? MAX_POKEMONS : pokemon.data.id - 1).toString()
        );
        const nextPokemon = await axios.get(
          API_URL + (pokemon.data.id === MAX_POKEMONS ? 1 : pokemon.data.id + 1).toString()
        );
        setIsLoading(false);
        setPokemon(pokemon.data);
        setNextPokemons([previousPokemon.data.name, nextPokemon.data.name]);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchData();
  }, [pokemonName]);

  return (
    <main className="pokemonSite">
      <section className="pokemonSite__top-section">
        <Link to={`/${nextPokemons[0]}`}>
          <button className="pokemonSite__button">
            <FaArrowLeft />
          </button>
        </Link>
        {isLoading ? <SkeletonCard /> : <Card pokemon={pokemon} typeColors={typeColors} />}
        <Link to={`/${nextPokemons[1]}`}>
          <button className="pokemonSite__button">
            <FaArrowRight />
          </button>
        </Link>
      </section>
    </main>
  );
};

export default PokemonSite;
