
import {GET_MOVIES ,
 GET_MOVIE_DETAIL, 
 ADD_MOVIE_FAVORITE ,
 REMOVE_MOVIE_FAVORITE,} from "../actions/index";


const initialState = {
  moviesFavorites: [],
  movies: [],
  movieDetail: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload.Search,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites:[ ...state.moviesFavorites,action.payload],
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter((movie) => movie.id !== action.payload),
      };
    default:
      return { ...state };
  }

}

export default rootReducer