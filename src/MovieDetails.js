import { useParams } from "react-router-dom";

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const styles = {
    color: movies.rating < 9 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (
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
      <p className="info-title">{movie.summary}</p>
    </div>
  );
}
