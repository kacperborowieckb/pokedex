import '../../styles/main.scss';
import SearchResult from '../SearchResult/SearchResult';
import './nav.scss';
import { useEffect, useRef, useState } from 'react';

const Nav = ({ pokemons }) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPokemons);
  }, [search]);

  return (
    <nav className="nav">
      <form
        className="nav__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search-pokemon" className="nav__label">
          Search for Pokemon
        </label>
        <input
          id="search-pokemon"
          className="nav__search-input"
          type="text"
          placeholder="Search for Pokemon"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </form>
      {search.length > 0 && isFocused && (
        <div className="nav__results">
          {searchResult.length > 0 ? (
            searchResult.map((pokemon, i) => (
              <SearchResult pokemon={pokemon} key={i} setSearch={setSearch} />
            ))
          ) : (
            <p className="nav__no-results">No results..</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
