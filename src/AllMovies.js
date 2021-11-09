import { useState } from "react";
import { Counter } from './Counter';

export function AllMovies() {
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
  {
    title: "12 Angry Men",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/220px-12_Angry_Men_%281957_film_poster%29.jpg",
    runningtime: "96min",
    Genres: "Crime Drama",
    rating: "9.0",
    releasedate: "1957",
    summary: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."
  },
  {
    title: "Schindler's List",
    image: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    runningtime: "195min",
    Genres: "Biography Drama History",
    rating: "8.9",
    releasedate: "1993",
    summary: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
  },
  {
    title: "The Matrix",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    runningtime: "136min",
    Genres: "Action Sci-Fi",
    rating: "8.7",
    releasedate: "1999",
    summary: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  },
  {
    title: "Inception",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    runningtime: "148min",
    Genres: "Action Adventure Sci-Fi Thriller",
    rating: "8.8",
    releasedate: "2010",
    summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  },
  {
    title: "The Avengers",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    runningtime: "143min",
    Genres: "Action Adventure Sci-Fi",
    rating: "8.0",
    releasedate: "2012",
    summary: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  }];
  return (
    <div className="App">
      {moviesList.map((m, index) => <MovieSection key={index} movTitle={m.title} poster={m.image} runningTime={m.runningtime} Genre={m.Genres}
        movRating={m.rating} releaseDate={m.releasedate} movSummary={m.summary} />)}
    </div>
  );
}
function MovieSection({ movTitle, poster, runningTime, Genre, movRating, releaseDate, movSummary }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: movRating < 9 ? "crimson" : "green",
    fontWeight: "bold",
  };
  const summaryStyles = {
    display: show ? "block" : "none"
  };

  return (
    <div className="movieDetails">
      <img className="poster" src={poster} alt={movTitle} />
      <h1>{movTitle}</h1>
      <div className="details">
        <p>{releaseDate}</p>
        <p>{runningTime}</p>
        <p>{Genre}</p>
      </div>
      <div className="information">
        <p style={styles}><span className="fa fa-star checked"></span> {movRating}</p>
        <p style={summaryStyles}>{movSummary}</p>
        <p onClick={() => setShow(!show)} className="text"> Read {show ? "less" : "more"}</p>
        <Counter />
      </div>
    </div>
  );
}
