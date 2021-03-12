import {AXIOS} from './axiosConfig';

class GenresService {
    async getGenres() {
        const {data} = await AXIOS.get('/genre/movie/list')
        return data
    }

    async getMovieDataById(movieId) {
        const {data} = await AXIOS.get(`/movie/${movieId}`)
        return data
    }
}

export const genresService = new GenresService();
