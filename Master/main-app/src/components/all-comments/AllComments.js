import React, {Component} from 'react';
import Comment from "../comment/Comment";
import './AllComments.css'
import {CommentService} from "../../services/comments/CommentService";

class AllComments extends Component {

    commentService = new CommentService();

    state = {comments: [], classState: 'one', chosenComment: null}
    flag = false;

    componentDidMount() {
        this.commentService.getAllComments().then(value => this.setState({comments: value}));
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }

    selectComment = (id) => {
        let chosenComment = this.state.comments.find(value => value.id === id)
        this.setState({chosenComment});
    }
    // selectComment = (id) => {
    //     this.commentService.getCommentById(id).then(value => this.setState({chosenComment: value}))
    // }

    render() {
        let {comments, classState, chosenComment} = this.state;
        return (
            <div>

                <h1 onClick={this.changeColor} className={classState}>All Comments</h1>
                {
                    comments.map(value => (<Comment elem={value}
                                                    key={value.id}
                                                    selectComment={this.selectComment}
                    />))
                }

                {chosenComment && <h3> {chosenComment.id} - {chosenComment.name} - {chosenComment.email} - {chosenComment.body}</h3>
                }
            </div>
        );
    }
}

export default AllComments;