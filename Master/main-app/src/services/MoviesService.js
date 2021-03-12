import {AXIOS} from './axiosConfig';

class MoviesService {
    async getMovies() {
        const {data} = await AXIOS.get('/discover/movie')
        return data
    }

    async getMovieDataById(movieId) {
        const {data} = await AXIOS.get(`/movie/${movieId}`)
        return data
    }
}

export const movieService = new MoviesService();
