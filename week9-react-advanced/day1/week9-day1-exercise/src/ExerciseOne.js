// import React from 'react'
//
// export class ExerciseOne extends React.Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             obj: null
//         }
//         this.handelSubmit = this.handelSubmit.bind(this)
//     }
//
//     handelSubmit(e) {
//         e.preventDefault()
//         const allInput = document.querySelectorAll('input')
//
//         let result = {
//             Title: allInput[0].value,
//             Author: allInput[1].value,
//             Genre: allInput[2].value,
//             yearPublished: allInput[3].value
//
//         }
//         this.setState({
//             obj: result
//         })
//     }
//
//     render() {
//         const {obj} = this.state
//         if (obj){
//             console.log(obj)
//             const p = document.querySelector('.dataSent').style.display='block'
//         }
//
//         return (
//             <div className={'form'}>
//                 <form id={'form'} onSubmit={this.handelSubmit}>
//                     <label htmlFor="">Title</label>
//                     <input type="text"/> <br/>
//                     <label htmlFor="">Author</label>
//                     <input type="text"/> <br/>
//                     <label htmlFor="">Genre</label>
//                     <input type="text"/> <br/>
//                     <label htmlFor="">Year Published</label>
//                     <input type="text"/> <br/>
//                     <button type="submit">Submmit</button>
//                 </form>
//                 <p className={'dataSent'} style={{display:'none'}}> SUCCSESS MESSAGE!</p>
//
//             </div>
//         )
//     }
// }
//
// export default ExerciseOne


// import React from "react";
// import './App.css'
// class ExerciseOne extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fname:'',
//             lname:'',
//             phone:'',
//             email:''
//         }
//     }
//
//     sendData = e => {
//         e.preventDefault()
//         this.setState({
//             fname:e.target[0].value,
//             lname: e.target[1].value,
//             phone: e.target[2].value,
//             email:e.target[3].value
//         })
//
//         const form = document.querySelector('.exersice-one').style.display = 'none'
//         const present = document.querySelector('.present').style.display = 'block'
//     }
//
//     render() {
//         const {fname,lname,phone,email} = this.state
//         return (
//             <div>
//                 <form className={'exersice-one'} onSubmit={this.sendData}>
//                     first name <input type="text"/>
//                     <br/>
//                     last name <input type="text"/>
//                     <br/>
//                     phone number <input type="text"/>
//                     <br/>
//                     email <input type="text"/>
//                     <br/>
//                     <button type={"submit"}>Submit</button>
//                 </form>
//
//                 <div className={'present'} style={{display:'none'}}>
//                    Hello, {fname} {lname}
//                     <br/>
//                     Email: {email} | {phone}
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default ExerciseOne;

import React from "react";
import './App.css'

class ExerciseOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const greetDiv = document.querySelector('.greet')
        greetDiv.style.display = 'block'
    }
    handleInputs = event => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value})
    }
    resetState = () => {
        this.setState({
            fname: '',
            lname: '',
            phone: '',
            email: ''
        })
    }

    render() {
        const {fname, lname, phone, email} = this.state;
        return (
            <div>
                <form className={'exersice-one'} onSubmit={this.handleSubmit}>
                    First name: <input onChange={this.handleInputs} type="text" name={'fname'}/>
                    <br/>
                    Last name:<input onChange={this.handleInputs} type="text" name={'lname'}/>
                    <br/>
                    Phone number:<input onChange={this.handleInputs} type="text" name={'phone'}/>
                    <br/>
                    Email: <input onChange={this.handleInputs} type="text" name={'email'}/>
                    <br/>
                    <button onChange={this.handleInputs} type={"submit"}>Submit</button>
                </form>
                <div className={'greet'} style={{display: 'none'}}>
                    Wellcome {fname} {lname} good to meet you!
                    <br/>
                    {email}|{phone}
                    <button onClick={this.resetState}>Reset</button>
                </div>
            </div>
        )
    }

}

export default ExerciseOne;