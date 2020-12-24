export default function User (props){
   const {item} = props;

    return(
        <div>
            {item.id} {item.name}
        </div>
    );
}