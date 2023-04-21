import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ pokemon, typeColors }) => {
  return (
    <Link to={`/${pokemon.name}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <p className="card__id">#{pokemon.id.toString().padStart(3, '0')}</p>
        <div className="card__img-container">
          <img className="card__img" src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        </div>
        <h2 className="card__name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>
        <div className="card__type">
          {pokemon.types.map((type, i) => {
            return (
              <p
                key={i}
                className="card__type-box"
                style={{ background: typeColors[type.type.name] }}
              >
                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
              </p>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Card;
