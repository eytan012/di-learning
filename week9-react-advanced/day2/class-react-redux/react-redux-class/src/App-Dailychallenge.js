import React from "react";
import './App.css';
import MovieList from "./components/daily-components/MovieList";
import {connect} from "react-redux";

const AppDailychallenge = ()=>{
    return (
        <div className={'daily'}>
            App Daily
            <MovieList/>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(AppDailychallenge);



//