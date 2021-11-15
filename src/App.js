import './App.css';
import { Switch,Redirect} from "react-router-dom";
import {Route, useHistory } from "react-router-dom";
import { useState } from 'react';
import { MovieList } from './MovieList';
import { EditMovie } from './EditMovie';
import { AddColor } from './AddColor';
import { AddMovie } from './AddMovie';
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



 function App() {
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
  const history = useHistory();
  const [mode,setMode] = useState("dark");
  const theme=createTheme({
  palette:{
    mode:mode,
  },
});//create context

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{borderRadius:"0px",minHeight:"100vh"}}>
<div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button variant="Text" color="inherit" onClick={()=> history.push("/")}>
            Home
          </Button>
          <Button onClick={()=>history.push("/movies")} variant="Text" color="inherit">
            Movies
          </Button>
          <Button onClick={()=>history.push("/addMovie")} variant="Text" color="inherit">
          Add Movie
          </Button>
          <Button onClick={()=>history.push("/ColorGame")} variant="Text" color="inherit">
          Color Game
          </Button>
          <Button  onClick={()=>history.push("/tiktactoe")} variant="Text" color="inherit">
          Tik Tac Toe
          </Button>
          <Button  
          style={{marginLeft:"auto"}}
          startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={()=>setMode(mode==="dark"?"light":"dark")}
          variant="Text"
           color="inherit"
           >
         {mode==="light"? "dark":"light"} mode
          </Button>
        </Toolbar>
      </AppBar>
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
   <Route path="/tiktactoe">
   <TicTacToe/>
   </Route>
   <Route path="**">
   <NotFound/>
   </Route>
   </Switch>
</div>
</Paper>
</ThemeProvider>
);
}


function TicTacToe(){
  const {width,height} = useWindowSize();
  const [board,setBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [isXturn,setIsXturn] = useState();

  const turnX = ()=>{
  setIsXturn(true) 
  }
  const turnO = ()=>{
    setIsXturn(false)
  }

  // const [board,setBoard] = useState([0,1,2,3,4,5,6,7,8])
const decideWinner=(board)=>{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8]
];

//if winning condition present in board then we have a winner

for(let i=0;i<lines.length;i++){
  const[a,b,c] = lines[i]

if(board[a]!==null && board[a]===board[b] && board[b]===board[c]){
  return board[a];
}
}
return null;//if no winner
};

const winner = decideWinner(board)
  
  const handleClick=(index)=>{
//create a copy of the board & then update the click box
//update only untouched box & untill no winner
if(winner===null && !board[index]){
  const boardCopy = [...board];
  boardCopy[index] = isXturn ? "X" : "O"
  setBoard(boardCopy)
  
  //toggle X turn
  setIsXturn(!isXturn)
}}
//reset the game
  const reset =()=>{
    const boardCopy = [...board];
     setBoard(boardCopy)
    for(let i=0;i<boardCopy.length;i++){
      boardCopy[i]=null
    }
  }
 //display who's turn
  const display = isXturn? "X":"O";


  return(
    <div className="fullGame">
       <h2>Select : X or O</h2> 
     <div className="selectBtn">
       <Button  variant="contained" color="success" onClick={turnX}>X</Button>
       <Button variant="contained" color="error" onClick={turnO}>O</Button>
    </div>
    <hr></hr>
      {winner ? " " :<h2> Next player : {display}</h2>}
      <hr></hr>
      {winner ? <Confetti width={width} height={height} gravity={0.05}/>:""}
    <div className="board">
    {board.map((val,index)=>(
      <GameBox key={index} val={val} onPlayerClick={()=>handleClick(index)}/>
    ))}
    </div>
    {winner ? <h2>winner is {winner}</h2> :""}
    <Button style={{marginTop:"10px"}} variant="outlined" onClick={reset}>restart</Button>
    </div>
  )
}

function GameBox({onPlayerClick,val}){
  const styles={
    color: val==="X" ? "green":"red",
  }
  return(
  <div  style={styles} onClick={onPlayerClick} className="gameBox">
    {val}
  </div>
  )
}

export default App;


