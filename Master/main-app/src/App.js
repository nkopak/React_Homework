import React, {useState, useEffect, useReducer} from 'react';
import {useSelector,useDispatch} from "react-redux";


export default function App() {

    const [counter, setCounter] = useState(1);
    const todo = useSelector((todo)=>todo);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type:'SET_TODO', payload: json});
                console.log(json)
            })
    }, [counter])

    return (
        <div>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>Increase count</button>
            <button onClick={() => dispatch({type: 'CHANGE_TODO_STATUS'})}>Change status</button>
            <button onClick={() => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()})}>Change title</button>
            <h1>Counter: {counter}</h1>
            {!!todo &&
            (<div>
                <h1>Id: {todo.id}</h1>
                <h1>Title: {todo.title}</h1>
                <h1>Completed: {todo.completed.toString()}</h1>
            </div>)}
        </div>
    );

}
