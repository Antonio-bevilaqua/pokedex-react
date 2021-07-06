import './index.css';
import PokeDetailsPage from './componentes/PokeDetailsPage/'
import PokeListPage from './componentes/PokeListPage/';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [listScroll, setListscroll] = useState(0)
  const [next, setNext] = useState('')

  return (
    <Router>
      <div className="app-container">
        <Route exact path="/" 
          render={(props) => <PokeListPage {...props} pokemons={pokemons} setPokemons={setPokemons} listScroll={listScroll} setListscroll={setListscroll} next={next} setNext={setNext} />} />
        <Route path="/pokemon/:id"
          render={(props) => <PokeDetailsPage {...props} pokemons={pokemons} />}
        />
      </div>
    </Router>
  );

}

export default App;
