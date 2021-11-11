import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link ,Redirect,useParams} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import { MovieList } from './MovieList';

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

function Welcome(){
  return <h2>welcome</h2>
}
function NotFound(){
  return (
  <img 
  className="errorpage" 
  src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif" 
  alt="404 error"
  />
  )
}
function MovieDetails({movies}){
  const{id}=useParams();
  const movie = movies[id]
  console.log(movie)
  const styles = {
    color: movies.rating < 9 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return(
    <div>
   <iframe 
     width="100%"
     height="800px"
     src={movie.trailer}
     title="YouTube Video Player"
     frameBorder="0"
     allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
     allowFullScreen
  ></iframe>
    <h2 className="info-title">{movie.title}</h2>
    <div className="information">
    <p>{movie.releasedate}</p>
    <p>{movie.runningtime}</p>
    <p>{movie.Genres}</p>
    <p style={styles}><span className="fa fa-star checked"></span> {movie.rating}</p>
    </div>
    <p className="info-title" >{movie.summary}</p>
</div>
)}

function AddMovie({ setMovies, movies }) {
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRunningtime, setMovieRunningtime] = useState("");
  const [movieReleasedate, setMovieReleasedate] = useState("");
  const [movieGenres, setMovieGenres] = useState("");
  const [movietrailer, setMovieTrailer] = useState("");

  const newMovie = {
    title: movieName,
    image: moviePoster,
    rating: movieRating,
    summary: movieSummary,
    runningtime: movieRunningtime,
    releasedate: movieReleasedate,
    Genres: movieGenres,
    trailer:movietrailer
  };
  return (
    <div className="inputs">
      <TextField value={movieName} onChange={(event) => setMovieName(event.target.value)} id="standard-basic" label="Movie Name" variant="standard" />
      <TextField value={movieRating} onChange={(event) => setMovieRating(event.target.value)} id="standard-basic" label="Rating" variant="standard" />
      <TextField value={movieSummary} onChange={(event) => setMovieSummary(event.target.value)} id="standard-basic" label="Summary" variant="standard" />
      <TextField value={moviePoster} onChange={(event) => setMoviePoster(event.target.value)} id="standard-basic" label="Poster" variant="standard" />
      <TextField value={movieRunningtime} onChange={(event) => setMovieRunningtime(event.target.value)} id="standard-basic" label="Runningtime" variant="standard" />
      <TextField value={movieReleasedate} onChange={(event) => setMovieReleasedate(event.target.value)} id="standard-basic" label="Releasedate" variant="standard" />
      <TextField value={movieGenres} onChange={(event) => setMovieGenres(event.target.value)} id="standard-basic" label="Genres" variant="standard" />
      <TextField value={movietrailer} onChange={(event) => setMovieTrailer(event.target.value)} id="standard-basic" label="Trailer" variant="standard" />
      <div>
        <Button className="button" onClick={() => setMovies([...movies, newMovie])} variant="outlined">Add Movie</Button>
      </div>
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["teal", "orange", "crimson"]);
  return (
    <section className="container">
      <div className="input-searchBox">
        <TextField value={color} onChange={(event) => setColor(event.target.value)} id="standard-basic" label="Enter a color" variant="standard" />
        <Button className="button" onClick={() => setColors([...colors, color])} variant="outlined">Add color</Button>
      </div>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </section>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "350px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}



