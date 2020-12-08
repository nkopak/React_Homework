import React, {Component} from 'react';
import PostService from "../services/PostService";

class AllPosts extends Component {

    state = {posts: []}
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AllPosts;