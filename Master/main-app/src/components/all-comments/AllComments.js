import React, {Component} from 'react';
import Comment from "../comment/Comment";
import './AllComments.css'

class AllComments extends Component {

    state = {comments: [], classState: 'one', chosenComment: null}
    flag = false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFormsAPI => {
                this.setState({comments: commentsFormsAPI})
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

    selectComment = (id) => {
        let chosenComment = this.state.comments.find(value => value.id === id)
        this.setState({chosenComment});
    }

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