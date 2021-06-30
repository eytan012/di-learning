// import './App.css';
// import SearchLove from "./components/SearchLove";
// import ViewLove from "./components/ViewLove";
// import {connect} from "react-redux";
// import {setFName} from "./redux/actions";
//
//
// function App(props) {
//
//   return (
//     <div>
//       <SearchLove />
//       <ViewLove/>
//     </div>
//   );
// }
//
// const mapStateToProps =(state)=>{
//    return  {
//         fname: state.getFName.fname,
//        sname: state.getSName.sname
//     }
// }
//
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         handleFName: (e)=>dispatch(setFName(e.target.value)),
//         handleSName: (e)=>dispatch(setFName(e.target.value))
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);


import './App.css';

import {setFName} from "./redux/actions";


function App() {

  return (
    <div>
    </div>
  );
}

export default App;