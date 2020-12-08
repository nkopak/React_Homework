import React, {Component} from 'react';
import UserService from "../services/UserService";

class AllUsers extends Component {

    state = {users: []}
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users})
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AllUsers;