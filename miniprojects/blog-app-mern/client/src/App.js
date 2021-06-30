import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {useContext} from "react";
import {Context} from "./context/Context";
import Contact from "./pages/contact/Contact";
import AboutPage from "./pages/about/AboutPage";

function App() {
    const {user} = useContext(Context)
    return (
        <Router>
            <TopBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/register">{user ? <Home/> : <Register/>}</Route>
                <Route path="/contact"><Contact/></Route>
                <Route path="/about"><AboutPage/></Route>
                <Route path="/login">{user ? <Home/> : <Login/>}</Route>
                <Route path="/write">{user ? <Write/> : <Register/>}</Route>
                <Route path="/settings">{user ? <Settings/> : <Register/>}</Route>
                <Route path="/post/:postId"><Single/></Route>
            </Switch>
        </Router>


    )
        ;
}

export default App;
