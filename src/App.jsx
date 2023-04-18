import Home from './components/Home/Home';
import PokemonSite from './components/PokemonSite/PokemonSite';
import Layout from './components/Layout/Layout';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":pokemon">
          <Route index element={<PokemonSite />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
