import React from "react";
import '../App.css'

const EnteredInformation = (props)=>{
    const {firstname,lastname,age,gender} = props
    console.log(gender)
    return(
        <div className={"EnteredInformation"}>
            <div>
            Your name: {firstname} {lastname}
            <br/><br/>
            Your age: {age}
            <br/><br/>
            Your gender:{gender}
            <br/><br/>
            Your destination:
            <br/><br/>
            Your dietary restrictions:
            <br/><br/>
            **Nuts free : No
            <br/><br/>
            **Lactose free : No
            <br/><br/>
            **Vegan meal : No
        </div>
        </div>
    )

}

export default EnteredInformation;