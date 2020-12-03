import React, {Component} from 'react';

class Comment extends Component {
    render() {

        let {elem} = this.props;
        return (
            <div>
                {elem.email} : {elem.body}
                <br/>
                <br/>
            </div>
        );
    }
}

export default Comment;