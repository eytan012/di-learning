import React from "react";
import EnteredInformation from "./EnteredInformation";
import '../App.css'


export class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            gender:'',
            thailand:'',
            japan:'',
            brazil:'',
        }
    }

    myChangeHandler = (event) => {

        if (event.target.name === "firstname") {
            this.setState({firstname: event.target.value})
        } else if (event.target.name === "lastname") {
            this.setState({lastname: event.target.value})
        } else if (event.target.name === "age") {
            this.setState({age: event.target.value})
        } else if (event.target.name === "gender") {
            this.setState({gender: event.target.value})
        }
    }

    render() {
        const {firstname, lastname, age,gender,female} = this.state
        return (
            <div>
                <div className={"FormComponent"}>
                    <div>
                        Name:<input type='text' name={"firstname"} onChange={this.myChangeHandler}/>
                    </div>
                    <div>
                        LastName:<input type='text' name={"lastname"} onChange={this.myChangeHandler}/>
                    </div>
                    Age:<input type='text' name={"age"} onChange={this.myChangeHandler}/>
                    <br/>


                    <input type="radio" name={"gender"} value="Male" onClick={this.myChangeHandler}/>Male
                    <br/>
                    <input type="radio" name={"gender"} value="Female" onClick={this.myChangeHandler}/>Female
                    <br/>
                    <b>Select your destination</b>
                    <br/>
                    <select>
                        <option>Choose destination</option>
                        <option value="Thailand" name="thailand" onChange={this.myChangeHandler}>Thailand</option>
                        <option value="Japan" name="japan" onChange={this.myChangeHandler}>Japan</option>
                        <option value="Brazil" name="brazil" onChange={this.myChangeHandler}>Brazil</option>
                    </select>
                    <br/><br/>
                    Dietary restrictions:
                    <br/>
                    <input type="checkbox" name="nuts" value="Nuts free" onChange={this.myChangeHandler}/>Nuts free
                    <br/>
                    <input type="checkbox" name="lactose" value="Lactose Free" onChange={this.myChangeHandler}/>Lactose Free
                    <br/>
                    <input type="checkbox" name="vegan" value="Vegan" onChange={this.myChangeHandler}/>Vegan

                </div>
                <EnteredInformation firstname={firstname} lastname={lastname} age={age} gender={gender}/>
            </div>
        );
    }
}