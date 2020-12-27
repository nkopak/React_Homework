import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from "redux";

const initialState = {
    userId: null,
    id: null,
    title: "",
    completed: false
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
