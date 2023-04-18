import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ pokemon }) => {
  return (
    <Link to={`${pokemon.name}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <p className="card__id">#{pokemon.id.toString().padStart(3, '0')}</p>
        <div className="card__img-container">
          <img className="card__img" src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        </div>
        <h2 className="card__name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>
        <h3 className="card__type">
          {pokemon.types
            .map((type) => {
              return `${type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}`;
            })
            .join(' ')}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
