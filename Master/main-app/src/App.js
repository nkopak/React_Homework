import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllComments from "./components/all-comments/AllComments";


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Link to={'/users'}>
                        Users
                    </Link>
                    <br/>
                    <Link to={'/posts'}>
                        Posts
                    </Link>
                    <br/>
                    <Link to={'/comments'}>
                        Comments
                    </Link>
                    <fieldset>
                        <Switch>
                            <Route path={'/users'} render={() => {
                                return <AllUsers/>
                            }}/>
                            <Route path={'/posts'} render={() => {
                                return <AllPosts/>
                            }}/>
                            <Route path={'/comments'} render={()=>{
                                return <AllComments/>
                            }}/>
                        </Switch>
                    </fieldset>
                </div>
            </Router>
        );
    }
}

export default App;