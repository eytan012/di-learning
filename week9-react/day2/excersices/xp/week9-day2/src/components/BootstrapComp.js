import React from "react";
import PropTypes from "prop-types";


const BootstrapComp = (props) => {
    const {title,imageUrl, buttonLabel, buttonUrl, description} = props;
    return(
        <div className="card m-5" style={{width: '20rem'}}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={buttonUrl} className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    )
}

BootstrapComp.propTypes = {
    title: PropTypes.string
};



export default BootstrapComp;