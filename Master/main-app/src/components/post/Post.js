import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {elem} = this.props;
        return (
            <div>
                {elem.id} : {elem.title}
            </div>
        );
    }
}

export default Post;