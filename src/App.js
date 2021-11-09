import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function App() {
  const [movieName,setMovieName] = useState(["name"]);
  const [movieRating,setMovieRating] = useState(["rating"]);
  const [movieSummary,setMovieSummary] = useState(["summary"]);
  const [moviePoster,setMoviePoster] = useState(["poster"]);

  const [movies,setMovies] = useState([]);
  console.log(movies)
  
  return (
    <div className="App">
   <TextField  onChange={(event)=>setMovieName(event.target.value)} id="standard-basic" label="Movie Name" variant="standard" />
   <TextField  onChange={(event)=>setMovieRating(event.target.value)} id="standard-basic" label="Rating" variant="standard" />
   <TextField  onChange={(event)=>setMovieSummary(event.target.value)} id="standard-basic" label="Summary" variant="standard" />
   <TextField  onChange={(event)=>setMoviePoster(event.target.value)} id="standard-basic" label="Poster" variant="standard" />
   <Button className="button" onClick={()=>setMovies([...movies,movieName,movieRating,movieSummary,moviePoster])} variant="outlined">Add</Button>
    
    {movies.map((mve,index)=>(
      <MovieList key={index} movie={mve}/>
      ))}
      </div>
    
  );
}
function MovieList({movie}){
  const styles={
    height:"25px",
    width:"250px",
    marginTop:"10px",
  };
  return <div
   style={styles}>
     <p>{movie}</p>

  </div>;
  }





// function AddColor(){
//   const [color,setColor] = useState("red");
//   const styles = {backgroundColor:color};
//   const [colors,setColors] = useState(["teal","orange","lavender"]);
//   return(
//     <div>
//     <div className="input-searchBox">
//        <TextField value={color} style={styles} onChange={(event)=>setColor(event.target.value)} id="standard-basic" label="Enter a color" variant="standard" />
//       <Button className="button" onClick={()=>setColors([...colors,color])} variant="outlined">Add color</Button>
//       </div>
//       {colors.map((clr,index)=>(
//         <ColorBox key={index} color={clr}/>
//       ))}
//     </div>
//   );
// }
