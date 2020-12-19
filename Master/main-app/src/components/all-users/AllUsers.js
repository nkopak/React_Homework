import React, {Component} from 'react';
import AllUsersService from "../services/AllUsersService";
import User from "../user/User";
import FullUser from "../full-user/FullUser";
import './AllUsers.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";



class AllUsers extends Component {

    usersService = new AllUsersService();
    state = {users: [], chosenUser: null};

    async componentDidMount() {
        await this.usersService.getAllUsers().then(value => this.setState({users: value}));
    }

    // selectedUser = (id) => {
    //     this.usersService.selectedUser(id).then(value => this.setState({chosenUser: value}))
    // }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div className={'main-all-users'}>
                <div className={'users'}>
                    {users.map(value => <User item={value}
                                              key={value.id}/>)}
                </div>
                <div className={'user-info'}>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullUser {...props} key={id}/>;
                        }}/>

                    </Switch>
                </div>
                {/*{chosenUser && <div className={'chosenUser'}>{chosenUser.name}</div>}*/}
            </div>
        );
    }
}

export default withRouter(AllUsers);