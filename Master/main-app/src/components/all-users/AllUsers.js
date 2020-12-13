import React, {Component} from 'react';
import AllUsersService from "../services/AllUsersService";
import User from "../user/User";

class AllUsers extends Component {

    usersService = new AllUsersService();
    state = {users: [], chosenUser: null};


    componentDidMount() {
        this.usersService.getAllUsers().then(value => this.setState({users: value}))
    }

    selectedUser = (id) => {
        this.usersService.selectedUser(id).then(value => this.setState({chosenUser: value}))
    }

    render() {
        let {users, chosenUser} = this.state;
        return (
            <div>
                {users.map(value => <User item={value}
                                          key={value.id}
                                          selectedUser={this.selectedUser}/>)}

                <hr/>
                {chosenUser && <h3>{chosenUser.name}</h3>}
            </div>
        );
    }
}

export default AllUsers;