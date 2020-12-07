import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {elem, selectPost} = this.props;
        return (
            <div>

                {elem.id} : {elem.title}
                <button onClick={()=> selectPost(elem.id)}>Chose me</button>
                <hr/>
            </div>
        );
    }
}

export default Post;