import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {elem, selectPost} = this.props;
        return (
            <div>
                <button onClick={()=> selectPost(elem.id)}>Chose me</button>
                {elem.id} : {elem.title}
                <hr/>
            </div>
        );
    }
}

export default Post;