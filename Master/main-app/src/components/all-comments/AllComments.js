import React, {Component} from 'react';
import './AllComments.css';
import CommentService from "../services/CommentService";
import Comment from "../comment/Comment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class AllComments extends Component {

    state = {comments: []};
    commentService = new CommentService();

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments})
    }

    render() {
        let{comments} = this.state;

        return (
            <div>
                {comments.map(value => <Comment key={value.id} item={value}/>)}

                <div className={'nest'}>
                    <Switch>
                        <Route path={'/comments/:id'} render={()=>{
                            return 'Some comment'
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllComments;