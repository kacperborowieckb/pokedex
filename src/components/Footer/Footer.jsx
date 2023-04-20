import '../../styles/main.scss';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__header">Pokedex by Kacper Borowiec</h3>
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="https://github.com/kacperborowieckb" target="_blank">
            GitHub
          </a>
        </li>
        <li className="footer__list-item">
          <a href="https://github.com/kacperborowieckb/pokedex" target="_blank">
            Repo
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
