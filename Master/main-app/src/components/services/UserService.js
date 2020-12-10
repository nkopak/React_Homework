export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';
    postUrl = 'https://jsonplaceholder.typicode.com/posts?userId='

    async getAllUsers(){
        return await fetch(this.url)
            .then(value => value.json())
    }

    async getUser(id){
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }

    async getUser(id){
        return await fetch(`${this.postUrl}${id}`)
            .then(value => value.json())
    }
}