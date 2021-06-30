import './App.css';
import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/contact'} component={Contact}/>
                <Route path="/post/:id" component={Post} id={'some id'}/>
            </Switch>


        </div>
    );
}

export default App;
