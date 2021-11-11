import './App.css';
import { Switch, Route, Link ,Redirect} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import { MovieList } from './MovieList';
import { EditMovie } from './EditMovie';
import { AddColor } from './AddColor';
import { AddMovie } from './AddMovie';
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';

export default function App() {
  const InitialMovies = [{
    title: "The Shawshank Redemption",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    runningtime: "142min",
    Genres: "Drama",
    rating: "9.3",
    releasedate: "1994",
    summary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer:"https://www.youtube.com/embed/6hB3S9bIaco"
  },
  {
    title: "The Godfather",
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    runningtime: "177min",
    Genres: "Crime Drama",
    rating: "9.2",
    releasedate: "1972",
    summary: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    trailer:"https://www.youtube.com/embed/sY1S34973zA"
  },
  {
    title: "The Dark Knight",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    runningtime: "152min",
    Genres: "Action Crime Drama Thriller",
    rating: "9.0",
    releasedate: "2008",
    summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
  },
{
  title: "The Matrix",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  runningtime: "136min",
  Genres: "Action Sci-Fi",
  rating: "8.7",
  releasedate: "1999",
  summary: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  trailer:"https://www.youtube.com/embed/vKQi3bBA1y8"
},
{
  title: "Inception",
  image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  runningtime: "148min",
  Genres: "Action Adventure Sci-Fi Thriller",
  rating: "8.8",
  releasedate: "2010",
  summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  trailer:"https://www.youtube.com/embed/YoHD9XEInc0"
},
{
  title: "The Avengers",
  image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
  runningtime: "143min",
  Genres: "Action Adventure Sci-Fi",
  rating: "8.0",
  releasedate: "2012",
  summary: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"
}];

  const [movies, setMovies] = useState(InitialMovies);

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
          <Link className="navbar-brand"to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand"to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand"to="/addMovie">Add Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/colorgame">Color Game</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Switch>
<Route exact path="/">
   <Welcome/>
   </Route>
   <Route path="/films">
   <Redirect to="/movies"/>
   </Route>
   <Route path="/movies/edit/:id">
   <EditMovie movies={movies} setMovies={setMovies}/>
   </Route>
   <Route path="/movies/:id">
   <MovieDetails movies={movies}/>
   </Route>
   <Route path="/movies">
   <MovieList movies={movies} setMovies={setMovies}/>
   </Route>
   <Route path="/addMovie">
   <AddMovie movies={movies} setMovies={setMovies}/>
   </Route>
   <Route path="/ColorGame">
   <AddColor/>
   </Route>
   <Route path="**">
   <NotFound/>
   </Route>
   </Switch>
</div>
</Router>   
);
}


