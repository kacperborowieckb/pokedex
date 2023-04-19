import '../../styles/main.scss';
import SearchResult from '../SearchResult/SearchResult';
import './nav.scss';
import { useEffect, useState } from 'react';

const Nav = ({ pokemons }) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
        />
      </form>
      {search.length > 0 && (
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
