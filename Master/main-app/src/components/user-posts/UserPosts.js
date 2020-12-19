import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsersService from "../services/AllUsersService";
import Posts from "../posts/Posts";

class UserPosts extends Component {
    state={posts:[]};

    userService = new AllUsersService();
    componentDidMount() {
        this.userService.getUserPosts().then(value => this.setState({posts:value}))
    }

    render() {
        const {posts} = this.state;
        console.log(posts);
        return (
            <div>
                {posts.map(value => <Posts item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default UserPosts;