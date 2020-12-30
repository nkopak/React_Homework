import React, {useState, useEffect, useReducer} from 'react';
import {useSelector,useDispatch} from "react-redux";


export default function App() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <form>
                <input value={input} onInput={e => setInput(e.target.value)}/>
                <button onClick={() => dispatch({type: 'ADD_USER'})}>Add user</button>
                <br/>
                <input/>
                <button onClick={() => dispatch({type: 'DELETE_USER'})}>Delete user</button>
            </form>
        </div>
    );

}
