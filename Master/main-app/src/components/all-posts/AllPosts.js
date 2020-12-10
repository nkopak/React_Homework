import React, {Component} from 'react';
import PostService from "../services/PostService";
import Post from "../post/Post";

import {Route, Switch, withRouter} from "react-router-dom";
import PostFull from "../post-full/PostFull";

class AllPosts extends Component {
    postService = new PostService();
    state = {posts: []}

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=> {
                        let {match:{params:{id}}} = props;
                        return <PostFull {...props} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);