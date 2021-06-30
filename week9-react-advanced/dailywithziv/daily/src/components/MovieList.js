import React, {Component} from 'react';
import {connect} from "react-redux";
import {getYoga, initMovies, movieDetails} from "../redux/actions";


class MovieList extends Component {
    componentDidMount() {
        this.props.initMovies()
    }

    render() {
        const {movies} = this.props
        return (
            <div>

            <div>
                <h1>Movies list</h1>
                <hr/>
                {
                    movies.map((movie, i) => {
                        return (
                            <div key={i}>

                                <h3> {movie.title}</h3>
                                <button onClick={()=>this.props.movieDetails(movie)}>Details</button>
                            </div>

                        )
                    })
                }

            </div>
            <div>
                <button onClick={()=>this.props.getYogaPoses()}>Get yoga</button>

            </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        yogaPoses:state.yogaPoses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initMovies: () => dispatch(initMovies()),
        movieDetails: (movie)=>dispatch(movieDetails(movie)),
        getYogaPoses:()=>dispatch(getYoga())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
