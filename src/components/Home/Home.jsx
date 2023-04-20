import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import SkeletonCard from '../SkeletorCard/SkeletonCard';
import BackToTopArrow from '../BackToTopArrow/BackToTopArrow';
import PageNav from '../PageNav/PageNav';
import './home.scss';
import '../../styles/main.scss';

const Home = ({ pokemons, setPokemons, typeColors }) => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  const [itemsPerSide, setItemsPerSide] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <Nav pokemons={pokemons} typeColors={typeColors} />
      <main className="home">
        <section className="home__pokemons">
          {isLoading &&
            Array(itemsPerSide)
              .fill(null)
              .map((item, i) => <SkeletonCard key={i} />)}
          {!isLoading &&
            pokemons
              .slice(itemsPerSide * (currentPage - 1), itemsPerSide * currentPage)
              .map((pokemon, i) => <Card key={i} pokemon={pokemon} typeColors={typeColors} />)}
        </section>
        <PageNav
          pokemons={pokemons}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerSide={itemsPerSide}
          isLoading={isLoading}
        />
        <BackToTopArrow />
      </main>
    </>
  );
};

export default Home;
