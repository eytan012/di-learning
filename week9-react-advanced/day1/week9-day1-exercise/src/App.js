import './App.css';
import ExerciseOne from "./ExerciseOne";
import ExersiceTwo from "./ExersiceTwo";
import ErrorBoundry from "./ErrorBoundry";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import ExerciseThree from "./ExerciseThree";

function App() {
    return (
        <div>
            <ExerciseOne />

            {/*<ErrorBoundry>*/}
            {/*    <ExersiceTwo/>*/}
            {/*</ErrorBoundry>*/}
            {/*<ExerciseThree/>*/}
        </div>
    );
}

export default App;
