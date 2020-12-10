import React, {Component} from 'react';
import PostService from "../services/PostService";

class PostFull extends Component {

    state = {post: null}
    postService = new PostService();

    async componentDidMount() {
        let {match:{params:{id}}} = this.props;
        let post = await this.postService.getPost(id);
        this.setState({post});
    }

    render() {
        // let {item} = this.props;
        let {post} = this.state;
        return (
            <div>
                {post && <div>{post.id} - {post.title} - {post.body}</div>}
            </div>
        );
    }
}

export default PostFull;