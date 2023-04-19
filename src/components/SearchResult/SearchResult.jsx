import { Link } from 'react-router-dom';
import '../../styles/main.scss';
import './searchResult.scss';

const SearchResult = ({ pokemon, setSearch }) => {
  return (
    <Link to={`${pokemon.name}`} className="search-result" onClick={() => setSearch('')}>
      <p className="search-result__id">#{pokemon.id.toString().padStart(3, '0')}</p>
      <div className="search-result__img-container">
        <img
          className="search-result__img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        ></img>
      </div>
      <h2 className="search-result__name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <h3 className="search-result__type">
        {pokemon.types
          .map((type) => {
            return `${type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}`;
          })
          .join(' ')}
      </h3>
    </Link>
  );
};

export default SearchResult;
