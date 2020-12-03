import React, {Component} from 'react';

class Comment extends Component {
    render() {

        let {elem,selectComment} = this.props;
        return (
            <div>

                <button onClick={()=>selectComment(elem.id)}>Chose me</button>
                {elem.email} : {elem.body} {elem.name} {elem.id}
                <hr/>
            </div>
        );
    }
}

export default Comment;