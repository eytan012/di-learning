import React from "react";
import './App.css';
import XpOne from "./components/XpOne";
import XpThree from "./components/XpThree";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: "ON"

        };
    }

    shootAgain = () => {
        this.shoot()
    }
    shoot = () => {
        alert("Nice Shot!")
    }

    shoot2 = () => {
        alert(this)
    }

    shoot3 = () => {
        alert(this)
    }

    shoot4 = (parameter) => {
        alert(parameter)
    }
    shoot5 = (val) => {
        alert(val)
    }

    clickHandler = () => {
        alert(' ‘I was clicked')
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter")
            alert(`The Enter key was pressed, your input is: ${event.target.value}`)
    }

     toggle = () => {
        if (this.state.isToggleOn === "ON"){
            this.setState({isToggleOn:"OFF"})
        } else if (this.state.isToggleOn === "OFF"){
            this.setState({isToggleOn:"ON"})
        }        }



    render() {
        return (
            <div className="App">
                <button onClick={this.shoot}>Click me</button>
                <button onClick={this.shootAgain}>Shoot Again</button>
                <button onClick={this.shoot2}>Keep shooting!</button>
                <button onClick={this.shoot3.bind(this)}>Keep Shooting!’</button>
                <button onClick={() => this.shoot4("goal")}>Shooting!</button>
                {/*<button onClick={()=>this.shoot5("six")}>exercise 6!</button>*/}
                {/*<XpOne/>*/}
                <button onClick={this.shoot5.bind(this)}>SHOOTING!!</button>
                <button onClick={this.clickHandler}>exercise seven</button>
                <input type="text" onKeyPress={this.handleKeyPress} placeholder={"Press enter key"}/>
                Exercise 9: <button onClick={this.toggle}>{this.state.isToggleOn}</button>
                <XpThree/>
            </div>
        );
    }

}

export default App;
