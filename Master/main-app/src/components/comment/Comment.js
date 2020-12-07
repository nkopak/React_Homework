import React, {Component} from 'react';

class Comment extends Component {
    render() {

        let {elem,selectComment} = this.props;
        return (
            <div>
                {elem.name} {elem.id}
                <button onClick={()=>selectComment(elem.id)}>Chose me</button>
                <hr/>
            </div>
        );
    }
}

export default Comment;