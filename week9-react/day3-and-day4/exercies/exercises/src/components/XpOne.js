import React from "react";

class XpOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: 'yellow'})
        }, 5000)
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {favoriteColor} = prevState
        console.log(favoriteColor)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.state.favoriteColor
    }

    changeColor = () => {
        this.setState({favoriteColor: 'pink'})
    }

    render() {
        const {favoriteColor} = this.state
        return (
            <>
                <h2>My favoite color is {favoriteColor}</h2>
                <div>before the update, color is  </div>
                <button onClick={this.changeColor}>Click me</button>
            </>
        )
    }
}


export default XpOne;