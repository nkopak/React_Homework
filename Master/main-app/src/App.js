import React, {Component} from 'react';

class App extends Component {
    myForm = React.createRef();

    state = {inputValue: ''}

    render() {
        return (
            <div>
                <form action={'/saveWER'} onSubmit={this.send} ref={this.myForm}>
                    <input onInput={this.commitState} value={this.state.inputValue}/>
                    <button>Send</button>
                </form>
            </div>
        );
    }

    commitState = (e) => {
        console.log(e.target.value);
        this.setState({inputValue: e.target.value})
    }

    send = (event) => {
        event.preventDefault();
        // console.log(this.myForm.current[0].value);
        console.log('Your input: ' + event.target.children[0].value);
    }
}

export default App;


// import React, {Component} from 'react';
// import Users from "./components/Users";
// import {Context} from "./components/services/ContextService";
//
//
// class App extends Component {
//
//     state = {users: []}
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => this.setState({users: value}))
//     }
//
//     render() {
//         // const {Consumer, Provider} = this.Context;
//         const {users} = this.state;
//         return (
//             <Context.Provider value={'asdfasfd'}>
//                 <div>
//                     <Users items={users}/>
//                 </div>
//             </Context.Provider>
//         );
//     }
// }
//
// export default App;


