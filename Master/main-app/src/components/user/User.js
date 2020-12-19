import React, {Component} from 'react';
import './User.css'
import {Switch,Route, Link, withRouter} from "react-router-dom";
import UserPosts from "../user-posts/UserPosts";

class User extends Component {
    render() {
        let {item, match: {url}} = this.props;
        // console.log(url);
        return (
            <div className={'user-block'}>
                <span className={'user-text'}>{item.id}) {item.name}</span>
                <Link className={'user-link'} to={`${url}/${item.id}`}>Info</Link>
                <Link className={'user-link'} to={`${url}/${item.id}/posts`}>Posts</Link>
                {/*<button onClick={()=>selectedUser(item.id)} className={'btn'}>Info</button>*/}
                <Switch>
                    <Route path={`${url}/${item.id}/posts`} render={()=> <UserPosts/>}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(User);