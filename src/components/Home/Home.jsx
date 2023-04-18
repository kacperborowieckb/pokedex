import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <Link to="bulbasaur">
        <button>przenies</button>
      </Link>
    </div>
  );
};

export default Home;
