export default class AllUsersService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async getAllUsers() {
        return await fetch(this.url)
            .then(value => value.json())
    }

    async selectedUser(id) {
        return await fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }

    async getUserPosts(){
        const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1'
        return await fetch(`${postsUrl}`)
            .then(value => value.json())
    }

}