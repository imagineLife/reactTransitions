import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import ToDo from './Components/ToDo/';
import TwoBars from './Components/TwoBars';
import ToolBar from './Components/ToolBar';
import SingleEmail from './Components/SingleEmail/single-email';
import EmailList from './Components/EmailList/email-list';
import './main.css';

export default function Email() {
    return (
        <Router>
            <div className="email">
                <ToolBar />
                <main>
                    <Switch>
                        <Route exact path="/waterMelon" component={ToDo} />
                        <Route exact path="/inbox" component={TwoBars} />
                        <Redirect from="/" to="/waterMelon"/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
