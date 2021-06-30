// import React from "react";
// import '../App.css'
// import {connect} from "react-redux";
// import {setFName,setSName} from "../redux/actions";
//
//
// const SearchLove = (props) => {
//     const {handleFName,handleSName,fname,sname} = props
//     const findMatch = ()=>{
//         const {fname,sname} = props
//         fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "cf8a4ee456msh5dc6f06a102744dp1cf400jsn6dc5bfdca299",
//                 "x-rapidapi-host": "love-calculator.p.rapidapi.com"
//             }
//         })
//             .then(response => response.json())
//             .then(data=>console.log(data))
//             .catch(err => {
//                 console.error(err);
//             });
//     }
//     return (
//         <div className={'searchLove'}>
//             Name One:<input type="text" onChange={handleFName}/>{fname}<br/>
//             Name Two: <input type="text" onChange={handleSName}/>{sname}<br/>
//             <button onClick={findMatch}>Find Match!</button>
//         </div>
//     )
// }
//
// const mapStateToProps =(state)=>{
//     return  {
//         fname: state.getFName.fname,
//         sname: state.getSName.sname
//     }
// }
//
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         handleFName: (e)=>dispatch(setFName(e.target.value)),
//         handleSName: (e)=>dispatch(setSName(e.target.value))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SearchLove);