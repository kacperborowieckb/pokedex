import './header.scss';
import '../../styles/main.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="header__logo" />
      </header>
    </Link>
  );
};

export default Header;
