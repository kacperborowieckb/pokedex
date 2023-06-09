import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './pageNav.scss';

const PageNav = ({ pokemons, currentPage, setCurrentPage, itemsPerPage, isLoading }) => {
  const maxPage = Math.ceil(pokemons.length / itemsPerPage);
  const [inputValue, setInputValue] = useState(currentPage);

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  const handleChange = (value) => {
    if (value === '') {
      setInputValue(value);
      return;
    }
    let page = Number(value);
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
      setInputValue(value);
    }
  };

  return (
    <section className="page-nav">
      <button
        className="page-nav__button"
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
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
        style={{ width: inputValue.toString().length * 15 }}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setInputValue(currentPage)}
      />
      <span className="page-nav__span">/</span>
      <span className="page-nav__max-pages">{isLoading ? 1 : maxPage}</span>
      <button
        className="page-nav__button"
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === maxPage || isLoading}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default PageNav;
