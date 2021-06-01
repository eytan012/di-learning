import React from "react";

const SmartAlertComp = (props) => {
    const {text, color} = props

    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        blue: 'alert-primary'
    };

    const result = color === colorClasses.red ?
        'alert alert-danger' : color === colorClasses.orange ?
        'alert alert-warning' : color === colorClasses.blue ?
        'alert alert-primary' : null;
    return (
        <div className={result} role="alert">{text}</div>
    )

}

export default SmartAlertComp;

