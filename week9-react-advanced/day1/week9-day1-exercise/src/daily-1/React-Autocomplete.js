import React from "react";
import Countries from "./Countries";
import ShowCountries from "./ShowCountries";

class ReactAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: null,
            text: '',
            num:0
        }
    }

    handleSearch = e => {
        let val = e.target.value;
        const items = Countries.filter((data) => {
            return data.toLowerCase().includes(val.toLowerCase())
        })
        this.setState({suggestions: items})
        this.setState({num: items.length})
    }


    render() {
        const {suggestions, text,num} = this.state;


        return (
            <div>

                <div style={{padding: '20px'}}>
                    Search:<input onChange={this.handleSearch} type="text" placeholder={'Enter country'}/>


                <ShowCountries suggestions={suggestions} num={num}/>
                </div>
            </div>

        )
    }

}

export default ReactAutocomplete;