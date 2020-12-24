// import {Context} from "./services/ContextService";
//
// export default function FullUser(props) {
//
//     const {items} = props;
//     return (
//         <Context.Consumer>
//             {
//                 (value) => {
//                     console.log(value);
//                     return (<div>
//                         {items.map(user => (<div>{user.id} {user.username} - {value}</div>))}
//                     </div>)
//                 }
//             }
//         </Context.Consumer>
//     );
// }