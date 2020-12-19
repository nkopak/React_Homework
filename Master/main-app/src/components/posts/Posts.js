import React, {Component} from 'react';
import './Posts.css'

class Posts extends Component {
    render() {
        const {item} = this.props;
        console.log(item);
        return (
            <div className={'posts'}>
                {item.id} {item.body}
            </div>
        );
    }
}

export default Posts;