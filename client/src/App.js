import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WinPercentage from './WinPercent';
import DeckList from './DeckList';
import LossCount from './LossCount';
import CardCombo from './CardCombo';
import VictoryCount from './VitoryCount';
import HomePage from './HomePage'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/win-percentage">Porcentagem de Vitórias</Link> | 
        <Link to="/deck-list">Lista de Decks</Link> | 
        <Link to="/loss-count">Quantidade de Derrotas</Link>
        <Link to="/CardCombo">Combo de cartas</Link>
        <Link to="/VitoryCount">Contagem de Vitórias</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/win-percentage" element={<WinPercentage />} />
        <Route path="/deck-list" element={<DeckList />} />
        <Route path="/loss-count" element={<LossCount />} />
      </Routes>
    </Router>
  );
};

export default App;
