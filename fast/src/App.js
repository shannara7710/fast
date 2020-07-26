import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Home from './containers/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AboutUs from './containers/About';
import EntrepriseStep1 from './containers/creer-compte-entreprise step 1';


function App() {
  return (
    <div className="App">
    

      <Router>
        <Route  path="/" exact component={Home}/>
        <Route  path="/a-propos" component={AboutUs}/>
        <Route path="/creer-compte/entreprise" component={EntrepriseStep1}/>
      </Router>
    
    </div>
  );
}

export default App;
