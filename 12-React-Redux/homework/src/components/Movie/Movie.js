import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
                <h4>{this.props.MovieDetail.Title}</h4>
                <p>{this.props.MovieDetail.Year} </p>
                <img src={this.props.MovieDetail.Poster} alt=""></img>
                <p>{this.props.MovieDetail.Plot} </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        MovieDetail: state.MovieDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetail: (movieId) => {
            dispatch(getMovieDetail(movieId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);