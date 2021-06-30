import './App.css';
import {Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/register'} component={Register}/>
            </Switch>

        </div>
    );
}

export default App;
