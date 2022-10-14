import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const movieId =this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="movie-detail">
                <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year} </p>
                <img src={this.props.movie.Poster} alt=""></img>
                <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetail: (id) => {
            dispatch(getMovieDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);