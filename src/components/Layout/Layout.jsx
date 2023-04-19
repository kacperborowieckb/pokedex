import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import '../../styles/main.scss';

const Layout = ({ pokemons }) => {
  return (
    <div className="App">
      <Header />
      <Nav pokemons={pokemons} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
