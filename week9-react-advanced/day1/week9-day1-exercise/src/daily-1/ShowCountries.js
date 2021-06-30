import React from "react";

const ShowCountries = (props) => {
    const {suggestions,num} = props
    return (
        <div>
            {/*{suggestions ? <p>{suggestions}</p> : <p>No country to suggest :(((</p>}*/}
            {
                suggestions ?
                suggestions.map((item,i)=>{
                    return <p key={i}>{item}</p>
                }) : <p>No countries to suggest</p>
            }
            {
                <h5 style={{backgroundColor:'grey'}}>Suggestions:{num}</h5>
            }
        </div>
    )
}


export default ShowCountries;