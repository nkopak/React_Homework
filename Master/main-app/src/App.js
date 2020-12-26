// import React, {memo, useMemo, useState} from 'react';

// const Test = memo(({name}) => {
//     const [counter, setCounter] = useState(0);
//     console.log('Test was rerendered');
//
//     return (
//         <h3 onClick={() => setCounter((prev) => prev + 1)}>Test{counter} {name}</h3>
//     )
// })
//
// export default function App() {
//
//     const [arr, setArr] = useState([1, 4, 23, 67, 34, 76, 145]);
//     const [sortOrder, setSortOrder] = useState('desc');
//
//     const totalSum1 = useMemo(() => {
//         return arr.reduce((acc, el) => acc += el, 0)
//     }, [arr]);
//
//
//     const sorted = useMemo(() => {
//         const cloneArr = [...arr];
//
//         if (sortOrder === 'asc') {
//             return cloneArr.sort((a, b) => a - b)
//         }
//         if (sortOrder === 'desc') {
//             return cloneArr.sort((a, b) => b - a)
//         }
//     },[arr,sortOrder])
//
// // const fnHandler = useMemo(()=>{
// //     return ()=>{
// //         console.log(sorted);
// //     }
// // },[sorted])
//
//     const fnHandler = useCallback(()=>{
//         console.log(sorted);
//     },[sorted]);
//
//     const [isVisible, setVisible] = useState(false);
//     return (
//         <div>
//             <h1>Redux</h1>
//             <h2>{totalSum1}</h2>
//             <button onClick={() => setVisible(!isVisible)}>Change visibility</button>
//             <button
//                 onClick={() =>
//                     setSortOrder((prev)=> prev === 'desc' ? 'asc' : 'desc')}>Change sort</button>
//             <button onClick={() => setArr([...arr, Math.random()])}>Add item to array</button>
//             {isVisible && <Test name='test' onClick={fnHandler}/>}
//         </div>
//     )
// }


//_________________REDUX_________________
import React from "react";
import {useSelector, useDispatch} from "react-redux";

export default function App() {

    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch();

    return (
        <div>
            <div>Redux{counter}</div>
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>increase</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>decrease</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </div>
    )
}
