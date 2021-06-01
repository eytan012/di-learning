import React from "react";

const AlertComp = (props) => {
    const {text,show} = props
    if (show === false) {
        return null;
    } else {
        return(
            <>
                <div className="alert alert-danger" role="alert">
                    {text}

                </div>

            </>
        )
    }

}

export default AlertComp;