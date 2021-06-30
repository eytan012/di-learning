import React from "react";
import './App.css'
import {Route, Switch, useParams} from 'react-router-dom'
import Navbar from "./ExerciseTwoComponents/Navbar";
import HomeScreen from "./ExerciseTwoComponents/HomeScreen";
import ProfileScreen from "./ExerciseTwoComponents/ProfileScreen";
import ShopScreen from "./ExerciseTwoComponents/ShopScreen";
import ErrorBoundry from "./ErrorBoundry";
import PicParams from "./ExerciseTwoComponents/Pic-Params";

class ExersiceTwo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <ErrorBoundry>
                        <Route exact path={'/'} component={HomeScreen}/>
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <Route exact path={'/profile'} component={ProfileScreen}/>
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <Route  path={'/shop'} component={ShopScreen}/>
                    </ErrorBoundry>
                        <Route  path={'/pic'} component={PicParams}/>

                </Switch>
            </div>
        )
    }
}

export default ExersiceTwo;