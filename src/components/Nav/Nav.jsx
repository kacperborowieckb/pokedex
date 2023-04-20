import '../../styles/main.scss';
import SearchResult from '../SearchResult/SearchResult';
import './nav.scss';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const Nav = ({ pokemons, typeColors, setItemsPerPage, setCurrentPage }) => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const itemPerPageOptions = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 30, label: 30 },
    { value: 40, label: 40 },
  ];

  useEffect(() => {
    const filteredPokemons = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedType.length > 0
          ? pokemon.types.some(
              (type) => type.type.name.toLowerCase() === selectedType.toLowerCase()
            )
          : true)
    );
    setSearchResult(filteredPokemons);
  }, [isFocused, search, selectedType]);

  useEffect(() => {
    document.addEventListener('click', (e) => handleUnFocus(e));
    return () => document.removeEventListener('click', (e) => handleUnFocus(e));
  }, []);

  const handleUnFocus = (e) => {
    if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
      return;
    }
    if (!e.target.className.includes('nav') || e.target.className === 'nav') {
      setIsFocused(false);
    }
  };

  return (
    <nav className="nav">
      <form
        className="nav__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="nav__top-section">
          <Select
            className="nav__select-container"
            classNamePrefix="nav"
            options={Object.keys(typeColors).map((item) => ({
              value: item,
              label: item.charAt(0).toUpperCase() + item.slice(1),
            }))}
            isClearable={true}
            defaultValue={''}
            placeholder="Select type"
            onChange={(type) => {
              setSelectedType(type ? type.value : '');
              setIsFocused(true);
            }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary50: 'transparent',
              },
            })}
          />
          <Select
            className="nav__select-container"
            classNamePrefix="nav"
            options={itemPerPageOptions}
            defaultValue={itemPerPageOptions[1]}
            onChange={(value) => {
              setItemsPerPage(value.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <label htmlFor="search-pokemon" className="nav__label">
          Search for Pokemon
        </label>
        <input
          id="search-pokemon"
          className="nav__search-input"
          type="text"
          placeholder="Search for Pokemon"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
        />
      </form>
      {isFocused && (
        <div className="nav__results">
          {searchResult.length > 0 ? (
            searchResult.map((pokemon, i) => (
              <SearchResult
                pokemon={pokemon}
                key={i}
                setSearch={setSearch}
                typeColors={typeColors}
              />
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
