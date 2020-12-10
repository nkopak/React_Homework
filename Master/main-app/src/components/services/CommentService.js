export default class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments';

    async getAllComments(){
        return await fetch(this.url)
            .then(value => value.json())
    }

    async getComment(id){
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }
}