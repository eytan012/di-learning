// import React from "react";
// import './App.css'
// import {connect} from "react-redux";
// import {increaseCount,decreaseCount} from "./redux/action";
//
//
// const CounterXp = (props) => {
//     const {increaseCount,count,decreaseCount} = props
//     return (
//         <div className={'counter'} style={{textAlign: 'center'}}>
//             <h2>Counter:{count}</h2>
//             <button onClick={increaseCount}>+</button>
//             <button onClick={decreaseCount}>-</button>
//         </div>
//     )
// }
//
// const mapStateToProps = (state) => {
//     return {
//         count: state.count,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increaseCount: () => dispatch(increaseCount()),
//         decreaseCount: () => dispatch(decreaseCount())
//     }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(CounterXp);