
import { getMovies } from "../actions";
import { getMovieDetail } from "../actions";
import { addMovieFavorite } from "../actions";
import { removeMovieFavorite } from "../actions";


const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

const rootReducer = (state = initialState, action)=>{
  switch (action.type) {
   
    case getMovies:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
      case getMovieDetail:
        return{
          ...state,
          movieDetail: action.payload,
        };
        case addMovieFavorite:
          return {
            ...state,
            moviesFavourites:[...state.moviesFavourites,action.payload],
          };
          case removeMovieFavorite:
            return{
              ...state,
              moviesFavourites: state.moviesFavourites.filter((movie)=> movie.id !== action.payload),
            };
      default:
        return { ...state };
    }

}

export default rootReducer