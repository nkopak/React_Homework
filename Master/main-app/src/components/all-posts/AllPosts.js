import React, {Component} from 'react';
import Post from "../post/Post";
import './AllPosts.css'

class AllPosts extends Component {

    state = {posts: [], classState: 'one', chosenPost: null};
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
                    chosenPost && (<Post elem={chosenPost}/>)
                }
            </div>
        );
    }
}

export default AllPosts;