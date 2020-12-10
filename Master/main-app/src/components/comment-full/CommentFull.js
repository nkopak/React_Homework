import React, {Component} from 'react';
import CommentService from "../services/CommentService";

class CommentFull extends Component {
    
    state={comment: null};
    commentService = new CommentService();

    async componentDidMount() {
        let {match:{params:{id}}} = this.props;
        let comment = await this.commentService.getComment(id);
        this.setState({comment});
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {comment && <div>{comment.id}) {comment.name} - {comment.email} - {comment.body}</div>}
            </div>
        );
    }
}

export default CommentFull;