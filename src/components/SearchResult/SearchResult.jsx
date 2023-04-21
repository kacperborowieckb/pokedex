import { Link } from 'react-router-dom';
import '../../styles/main.scss';
import './searchResult.scss';

const SearchResult = ({ pokemon, setSearch, typeColors }) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="search-result" onClick={() => setSearch('')}>
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
      <div className="search-result__type">
        {pokemon.types.map((type, i) => {
          return (
            <p
              key={i}
              className="search-result__type-box"
              style={{ background: typeColors[type.type.name] }}
            >
              {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
            </p>
          );
        })}
      </div>
    </Link>
  );
};

export default SearchResult;
