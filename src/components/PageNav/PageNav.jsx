import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './pageNav.scss';

const PageNav = ({ pokemons, currentPage, setCurrentPage, itemsPerSide }) => {
  const maxPage = Math.floor(pokemons.length / itemsPerSide);
  const [inputValue, setInputValue] = useState(currentPage);

  const handleChange = (value) => {
    if (value === '') setInputValue(value);
    if (value >= 1 && value <= maxPage) {
      setCurrentPage(value);
      setInputValue(value);
    }
  };

  return (
    <section className="page-nav">
      <button
        className="page-nav__button"
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>
      <label htmlFor="select-page" className="page-nav__label">
        Change page
      </label>
      <input
        className="page-nav__input"
        type="text"
        id="select-page"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setInputValue(currentPage)}
      />
      <span className="page-nav__span">/</span>
      <span className="page-nav__max-pages">{maxPage}</span>
      <button
        className="page-nav__button"
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === maxPage}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default PageNav;