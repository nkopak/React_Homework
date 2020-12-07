import React, {Component} from 'react';
import Post from "../post/Post";
import './AllPosts.css'
import {PostService} from "../../services/posts/PostService";

class AllPosts extends Component {

    postService = new PostService();

    state = {posts: [], classState: 'one', chosenPost: null};
    flag = false;

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}));
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }

    selectPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost});
    }

    render() {
        let {posts, classState, chosenPost} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Posts</h1>
                {
                    posts.map(value => (<Post elem={value}
                                              key={value.id}
                                              selectPost={this.selectPost}/>))
                }

                {
                    chosenPost && <h3> {chosenPost.id} - {chosenPost.title} - {chosenPost.body} </h3>
                }
            </div>
        );
    }
}

export default AllPosts;