import React, {Component} from 'react';

import {Route, Switch, withRouter} from "react-router-dom";
import CommentService from "../services/CommentService";
import Comment from "../comment/Comment";
import CommentFull from "../comment-full/CommentFull";

class AllComments extends Component {
    state = {comments: []}
    commentService = new CommentService();

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {comments.map(value => <Comment key={value.id} item={value}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let {match:{params:{id}}} = props;
                        return <CommentFull {...props} key={id}/>
                    }}/>
                </Switch>
            </div>

        );
    }
}

export default withRouter(AllComments);