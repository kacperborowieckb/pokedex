import { useParams } from 'react-router-dom';

const PokemonSite = () => {
  const { pokemon: pokemonName } = useParams();
  return <div>{pokemonName}</div>;
};

export default PokemonSite;
