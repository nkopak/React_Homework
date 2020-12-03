import React, {Component} from 'react';
import Comment from "../comment/Comment";
import './AllComments.css'

class AllComments extends Component {

    state = {comments: [], classState: 'one', clsName:'pairs'}
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

    render() {
        let {comments, classState,clsName} = this.state;
        return (
            <div>
                {/*{*/}
                {/*    comments.map(value => {*/}
                {/*        if(value.id%2){*/}
                {/*            clsName = 'pairs'*/}
                {/*        } else {*/}
                {/*            clsName ='not pairs'*/}
                {/*        }*/}
                {/*    })*/}
                {/*}*/}

                <h1 onClick={this.changeColor} className={classState}>All Comments</h1>
                {
                    comments.map(value => (<Comment elem={value} key={value.id} />))

                }
            </div>
        );
    }
}

export default AllComments;