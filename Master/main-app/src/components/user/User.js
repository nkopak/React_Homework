import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, chosenUser, selectedUser} = this.props;
        return (
            <div>
                {item.id}) {item.name}
                <button onClick={()=>selectedUser(item.id)}>Info</button>
            </div>
        );
    }
}

export default User;