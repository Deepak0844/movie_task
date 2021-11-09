import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from "./Counter";

export function MovieList({ title, image, rating, summary, releaseDate, runningTime, Genre }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: rating < 9 ? "crimson" : "green",
    fontWeight: "bold",
  };
  const summaryStyles = {
    display: show ? "block" : "none"
  };
  return (
    <div className="movieDetails">
      <img className="poster" src={image} alt={title} />
      <h1>{title}</h1>
      <div className="details">
        <p>{releaseDate}</p>
        <p>{runningTime}</p>
        <p>{Genre}</p>
      </div>
      <div className="information">
        <p style={styles}><span className="fa fa-star checked"></span> {rating}</p>
        <p style={summaryStyles}>{summary}</p>
        <IconButton
          onClick={() => setShow(!show)} className="text"
          aria-label="delete" color="error">
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
          <Counter />
      </div>
    </div>
  );
}
