import './App.css';
import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }
    }
    handleClick = ()=>{
    this.setState({counter: ++this.state.counter})
    }

    render() {
        const {counter} = this.state
        if (counter >= 5){
            throw  new Error('NUMBER IS BIGGER THEN 5')
        }
        return (
            <div className="App">
                <div>
                    {this.state.counter}

                </div>
                <button onClick={this.handleClick}>Click me</button>

            </div>
        );
    }


}

export default Counter;
