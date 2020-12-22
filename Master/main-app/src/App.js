import React, {useState, useEffect, useReducer} from 'react';


let test = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODO': {
            return action.payload
        }
        case 'CHANGE_TODO_STATUS': {
            return {
                ...state,
                completed: !state.completed
            };
        }
        case 'CHANGE_TODO_TITLE': {
            return {
                ...state,
                title: action.payload
            };
        }
        default: {
            console.error('Didnt found case for action:', action)
            return state;
        }
    }
}

const initialState = {
    userId: null,
    id: null,
    title: "",
    completed: false
}

export default function App() {
    const [state,dispatch] = useReducer(reducer,initialState);

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type:'SET_TODO', payload: json});
                console.log(json)
            })
    }, [counter])

    const onCLickIncrease = () => setCounter((prevState) => prevState + 1);

    const onChangeStatus = () => dispatch({type: 'CHANGE_TODO_STATUS'});
    const onChangeTitle = () => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()});

    return (
        <div>
            {/*{user.map(el=><h2>{el}</h2>)}*/}
            <button onClick={onCLickIncrease}>Increase count</button>
            <button onClick={onChangeStatus}>Change status</button>
            <button onClick={onChangeTitle}>Change title</button>
            <h1>Counter: {counter}</h1>
            {/*<h1>{test}</h1>*/}
            {!!state &&
            (<div>
                <h1>Id: {state.id}</h1>
                <h1>Title: {state.title}</h1>
                <h1>Completed: {state.completed.toString()}</h1>
            </div>)}
        </div>
    );

}
