import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';


export function AddMovie({ setMovies, movies }) {
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [moviePoster, setMoviePoster] = useState("");

  const [movieRunningtime, setMovieRunningtime] = useState("");
  const [movieReleasedate, setMovieReleasedate] = useState("");
  const [movieGenres, setMovieGenres] = useState("");

  const newMovie = {
    title: movieName,
    image: moviePoster,
    rating: movieRating,
    summary: movieSummary,
    runningtime: movieRunningtime,
    releasedate: movieReleasedate,
    Genres: movieGenres
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
      <div>
        <Button className="button" onClick={() => setMovies([...movies, newMovie])} variant="outlined">Add Movie</Button>
      </div>
    </div>
  );
}
