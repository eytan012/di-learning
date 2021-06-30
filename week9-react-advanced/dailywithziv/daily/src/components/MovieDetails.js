import React from 'react';
import {connect} from "react-redux";


const MovieDetails = (props) => {
    const {details} = props

        if (details===''){
            return(
                <div>
                    <h1>No details to show...</h1>
                    <hr/>
                </div>
            )
        }

    return (
        <div>
            <h2>{details.title} Details:</h2>
            <hr/>
            <h4>title: {details.title}</h4>
            <h4>release date: {details.releaseDate}</h4>
            <h4>rating: {details.rating}</h4>
        </div>
    );
}
const mapStateToProps = (state)=>{
    return{
        details:state.details
    }
}

export default connect(mapStateToProps,null)(MovieDetails);