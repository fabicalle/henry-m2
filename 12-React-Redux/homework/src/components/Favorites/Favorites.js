//import { lib } from "markdown-it/lib/common/utils";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';


export class ConnectedList extends Component {


 
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map(
            movie => {

              
              return (
                <li key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <span>{movie.title} </span>
                  </Link>
                  <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
                </li>


              )
            }
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavorites,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: (id) => {
      dispatch(removeMovieFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
