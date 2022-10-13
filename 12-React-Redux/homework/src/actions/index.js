const GET_MOVIES = "GET_MOVIES";
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
const apiKey= "747e7eeb";



export const getMovies = (movie) => {
    return function (dispatch){
   fetch( `http://www.omdbapi.com/?apikey=${apiKey}=&s=${movie}`)
   .then(response => response.json())
   .then((data)=>dispatch({type:GET_MOVIES, payload: data}));
};

};

export const addMovieFavorite = (id) =>{
 return ({type:ADD_MOVIE_FAVORITE, payload: id})
};

export const removeMovieFavorite= (id)=>{
return{type: REMOVE_MOVIE_FAVORITE, payload: id}
};

export const getMovieDetail= (idMovie)=>{
   return function (dispatch){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
    .then(response => response.json())
    .then((data) => dispatch({type:GET_MOVIE_DETAIL,payload:data}))
   }
}