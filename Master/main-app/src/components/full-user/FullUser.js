import React, {Component} from 'react';
import AllUsersService from "../services/AllUsersService";

class FullUser extends Component {
    state = {user: null}

    userService = new AllUsersService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        const user = await this.userService.selectedUser(id)
        this.setState({user});
        // console.log(user);
    }

    render() {
        let {user} = this.state;
        return (
            <div>
                {user && <div>{user.id}) {user.name} {user.email} {user.username}</div>}
            </div>
        );
    }
}

export default FullUser;