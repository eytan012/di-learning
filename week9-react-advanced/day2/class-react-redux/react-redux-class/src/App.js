// import './App.css';
// import React from "react";
// import {connect} from "react-redux";
// import {changePropertyOne, changePropertyTwo, handleCounter} from "./redux/action";
// import Child from "./components/Child";
//
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//
//     render() {
//        const {propertyOne,propertyTwo,handleInput,handleClick,counter,handleCounter} = this.props
//         return (
//             <div className={'App'}>
//                 <h2>Simple Redux Example</h2>
//                 <p>property one: {propertyOne}</p>
//                 <input type="text" onChange={handleInput} name={'propertyOne'}/>
//                 <p>property two:{propertyTwo}</p>
//                 <button onClick={handleClick}>Click</button>
//                 <h1>COUNTER:{counter}</h1>
//                 <button onClick={handleCounter}>Count</button>
//                 <Child/>
//             </div>
//         );
//     }
//
//
// }
//
// const mapStateToProps = (state) => {
//     return {
//         propertyOne: state.propertyOne,
//         propertyTwo: state.propertyTwo,
//         counter: state.counter
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleInput: (e)=> dispatch(changePropertyOne(e.target.value)),
//         handleClick: ()=> dispatch(changePropertyTwo()),
//         handleCounter: ()=>dispatch(handleCounter())
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
