import React from "react";
const Jumbotron = (props) => {
    const {title, description, buttonLabel, buttonURL} = props
    return (
        <>
<div>
    <div className="jumbotron bg-light">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href={buttonURL} role="button">{buttonLabel}</a>
            </p>
    </div>
</div>
        </>
    )
}


export default Jumbotron;