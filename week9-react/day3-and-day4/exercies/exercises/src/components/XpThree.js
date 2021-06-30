import React from "react";

class XpThree extends React.Component {
    constructor(props) {
        super(props);

    }

    exOne = ()=>{
        alert('Great Shot')
    }
    render() {
        return (
            <>
            <button onClick={this.exOne}>click me</button>
            </>
        )
    }
}


export default XpThree;