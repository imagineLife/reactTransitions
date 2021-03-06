import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import ToDo from './components/ToDo/';
import TwoBars from './components/TwoBars';
import TwoBarsRTG from './components/TwoBarsRTG';
import About from './components/About';
import NavBar from './components/NavBar';
import './main.css';

export default function RouteComponent() {
    let navLinks = [
        {text:'To Do', url:'/todo'},
        {text:'Two Bars D3', url:'/twobars'},
        {text:'Two Bars ReactTrGrp', url:'/twoMoreBars'},
        {text:'About', url:'/about'}
    ]
    return (
        <Router>
            <div className="routerWrapper">
                <NavBar links={navLinks}/>
                <main>
                    <Switch>
                        <Route exact path="/ToDo" component={ToDo} />
                        <Route exact path="/twobars" component={TwoBars} />
                        <Route exact path="/twoMoreBars" component={TwoBarsRTG} />
                        <Route exact path="/about" component={About} />
                        <Redirect from="/" to="/todo"/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
