import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import SkeletonCard from '../../components/SkeletorCard/SkeletonCard';
import BackToTopArrow from '../../components/BackToTopArrow/BackToTopArrow';
import PageNav from '../../components/PageNav/PageNav';
import './home.scss';
import '../../styles/main.scss';

const Home = ({ pokemons, setPokemons, typeColors }) => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  const [itemsPerPage, setItemsPerPage] = useState(20);
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
      <Nav
        pokemons={pokemons}
        typeColors={typeColors}
        setItemsPerPage={setItemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="home">
        <section className="home__pokemons">
          {isLoading &&
            Array(itemsPerPage)
              .fill(null)
              .map((item, i) => <SkeletonCard key={i} />)}
          {!isLoading &&
            pokemons
              .slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage)
              .map((pokemon, i) => <Card key={i} pokemon={pokemon} typeColors={typeColors} />)}
        </section>
        <PageNav
          pokemons={pokemons}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          isLoading={isLoading}
        />
        <BackToTopArrow />
      </main>
    </>
  );
};

export default Home;
