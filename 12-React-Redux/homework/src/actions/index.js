export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
const apiKey = "747e7eeb";



export const getMovies = (title) => {
   return function (dispatch) {
      fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
         .then((response) => response.json())
         .then((data) => {dispatch({ type: GET_MOVIES, payload: data });
      });
   };

};

export const addMovieFavorite = (id) => {
   return ({ type: ADD_MOVIE_FAVORITE, payload: id })
};

export const removeMovieFavorite = (id) => {
   return { type: REMOVE_MOVIE_FAVORITE, payload: id }
};

export const getMovieDetail = (id) => {
   return function (dispatch) {
      fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
         .then((response) => response.json())
         .then((data) => dispatch({ type: GET_MOVIE_DETAIL, payload: data }))
   };
};

