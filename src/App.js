import './index.css';
import PokeDetailsPage from './componentes/PokeDetailsPage/'
import PokeListPage from './componentes/PokeListPage/';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {PokemonListProvider} from './context/PokeListContext.js'

function App() {
  return (
    <Router>
      <PokemonListProvider>
        <div className="app-container">
          <Route exact path="/" 
            render={(props) => <PokeListPage {...props} />} />
          <Route path="/pokemon/:id"
            render={(props) => <PokeDetailsPage {...props} />}
          />
        </div>
      </PokemonListProvider>
    </Router>
  );

}

export default App;
