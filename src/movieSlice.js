import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[{id:1, name: 'intercellular'},{id:2, name: 'interstellar'} ]
}

const movieslice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovie:(state, action)=>{

            const newMovie ={
                id: state.movies[state.movies.length -1] +1,
                name: action.payload 
            }
            state.movies.push(newMovie)
        },
        removeMovie: (state, action)=>{
            const confirmed = confirm("Are you sure you want to delete the movie???")

            if (confirmed){
                state.movies = state.movies.filter((movie)=> movie.id !== action.payload)
                
            }
        }
    }
})

export const {addMovie, removeMovie} = movieslice.actions
export default movieslice.reducer