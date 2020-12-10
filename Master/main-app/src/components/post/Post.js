import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Post extends Component {
    render() {

        let {item, match: {url}} = this.props;
        return (
            <div>
                {item.id} - {item.title} - <Link to={`${url}/${item.id}`}>Post info</Link>

            </div>

        );
    }
}

export default withRouter(Post);