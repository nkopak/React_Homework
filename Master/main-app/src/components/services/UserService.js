export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async getAllUsers(){
        await fetch(this.url)
            .then(value => value.json())
    }


}