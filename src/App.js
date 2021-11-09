import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieApp } from './MovieApp';
import { AddColor } from './AddColor';
import { AllMovies } from './AllMovies';
export default function App() {
  return (
    <Router>
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="navbar-brand"to="/MovieApp">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand"to="/addMovie">Add Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/ColorGame">Color Game</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Switch>
   <Route path="/MovieApp">
   <AllMovies/>
   </Route>
   <Route path="/addMovie">
   <MovieApp/>
   </Route>
   <Route path="/ColorGame">
   <AddColor/>
   </Route>
   </Switch>
</div>
</Router>   
);
}