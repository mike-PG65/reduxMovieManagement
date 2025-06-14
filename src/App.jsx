import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addMovie } from "./movieSlice"

const App = () => {

  const dispatch = useDispatch()
  const [newMovie, setNewMovie] = useState('')
  const movies = useSelector((state)=>(state.movies.movies))


  const handleAddNewMovie = ()=>{
    if (newMovie){
      dispatch(addMovie(newMovie))
      setNewMovie("")
    }

  }
  
  return (
    <div>

      <div>


        <input type="text" placeholder="Enter the name of the movie" onChange={(e)=>{setNewMovie(e.target.value)}} value={newMovie} />
        <button onClick={handleAddNewMovie}> Add movie </button>
        {
          movies.map((movie)=>(
            <p key={movie.id}> {movie.name} </p>
          ))
        }
      </div>
      
    </div>
  )
}

export default App
