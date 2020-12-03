import React, {Component} from 'react';
import Post from "../post/Post";
import './AllPosts.css'

class AllPosts extends Component {

    state = {posts: [], classState: 'one'};
    flag = false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI})
            })
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }

    render() {
        let {posts, classState} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Posts</h1>
                {
                    posts.map(value => (<Post elem={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllPosts;