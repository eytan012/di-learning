import './App.css';
import quotesdb from "./Quotes/QuotesDb";
import React from "react";

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesObj: null,
            num: ''
        }

    }

    componentDidMount() {
        this.generateQuote()
    }
    generateQuote = () => {
        this.setState({quotesObj: quotesdb})
    }

    render() {
        let randomNum = Math.floor(Math.random() * 100);
        const {quotesObj, num} = this.state
        console.log(quotesObj)
        return (
            <div className="blockquote">
                <p>
                    {}
                </p>
                <br/>
                <p>Author: {}</p>
                <br/>
                <button onClick={this.generateQuote} >Click</button>
            </div>
        );
    }


}


export default Quotes;

