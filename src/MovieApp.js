import { useState } from 'react';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';

export function MovieApp() {

  const moviesList = [{
    title: "The Shawshank Redemption",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    runningtime: "142min",
    Genres: "Drama",
    rating: "9.3",
    releasedate: "1994",
    summary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title: "The Godfather",
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    runningtime: "177min",
    Genres: "Crime Drama",
    rating: "9.2",
    releasedate: "1972",
    summary: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
  },
  {
    title: "The Dark Knight",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    runningtime: "152min",
    Genres: "Action Crime Drama Thriller",
    rating: "9.0",
    releasedate: "2008",
    summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
},
];

  const [movies, setMovies] = useState(moviesList);

  return (
    <div className="App">
      <AddMovie movies={movies} setMovies={setMovies} />
      {movies.map((mve, index) => (
        <MovieList key={index} title={mve.title} image={mve.image} rating={mve.rating}
          summary={mve.summary} runningTime={mve.runningtime} releaseDate={mve.releasedate} Genre={mve.Genres} />
      ))}
    </div>
  );
}
