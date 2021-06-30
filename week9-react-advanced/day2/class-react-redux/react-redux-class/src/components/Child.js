// import React from "react";
// import {connect} from "react-redux";
// import {changePropertyOne} from "../redux/action";
//
//
// const Child = (props)=>{
//     const {propertyOne,propertyTwo,handleInput} = props
//     return(
//         <div>
//             <h2>Property ONE:{propertyOne}</h2>
//             <h2>Property TWO: {propertyTwo}</h2>
//             <br/>
//             Change PropertyOne:
//             <br/>
//             <input type="text" onChange={handleInput}/>
//             <h2>PropertyOne changed by child comp:{propertyOne}</h2>
//         </div>
//     )
// }
//
// const mapStateToProps = (state) => {
//     return {
//         propertyOne: state.propertyOne,
//         propertyTwo: state.propertyTwo,
//     }
// }
//
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         handleInput: (e)=> dispatch(changePropertyOne(e.target.value)),
//
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(Child);