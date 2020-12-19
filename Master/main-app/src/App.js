import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className={'main'}>
                <div className={'header'}>
                    <Router>
                        <div className={'link-div'}>
                            <Link className={'link'} to={'/users'}>Show Users</Link>
                        </div>
                        <Switch>
                            <Route path={'/users'} render={() => {
                                return <AllUsers/>
                            }}/>
                        </Switch>
                    </Router>
                </div>
                <div className={'footer'}></div>
            </div>
        );
    }
}

export default App;