import React from "react";
import Home from "./components-router/HomeComp";
import About from "./components-router/AboutComp";
import Contact from "./components-router/ContactComp";
import Nav from "./components-router/HeaderNavComp";
import {Route, Switch, useParams} from 'react-router-dom'

class AppRouterPractice extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <Nav/>
                <Switch>
                <Route exact path={'/'}>
                    <Home say={'hello world'}/>
                </Route>
                <Route path={'/about'} component={About}/>
                <Route path={'/contact'} children={<Contact ziv={'contact eytan'}/>}/>
                </Switch>

            </div>
        )
    }

}

export default AppRouterPractice;