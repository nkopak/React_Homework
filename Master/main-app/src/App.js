import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/posts'}>To all posts</Link>
                        </li>
                        <li>
                            <Link to={'/comments'}>To all comments</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path={'/posts'} render={()=><AllPosts/>}/>
                        <Route path={'/comments'} render={()=><AllComments/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
