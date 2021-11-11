import { IconButton } from '@mui/material';
import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
export function MovieList({movies,setMovies}){
    return(
        <section>
            {movies.map(({title,rating,releasedate,runningtime,Genres,summary,image},index)=>(
                <Movie
                   title={title}
                   rating={rating}
                   summary={summary}
                   releaseDate={releasedate}
                   runningTime={runningtime}
                   Genre={Genres}
                   image={image}
                   id={index}
                   deleteButton={
                  <IconButton
                  onClick={()=>{
                      const deleteIdx=index;
                      const remainingMovies=movies.filter(
                          (mv,idx)=>idx!==deleteIdx
                      );
                      setMovies(remainingMovies)
                  }}

                  color="error"
                  aria-label="delete movie"
                  >
                      <DeleteIcon/>
                  </IconButton>
                }
                editButton={
                    <IconButton
                    onClick={()=>{console.log("hello")}}
                  color="secondary"
                  aria-label="delete movie"
                  >
                  <EditButton/>
                  </IconButton>
                }
                />
))}
</section>
);}