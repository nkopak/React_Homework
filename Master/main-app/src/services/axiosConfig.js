import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzcwNzE0MWE1OGRmYmIzNWY4NGMwOTRlNzNkYTM3NCIsInN1YiI6IjVmZmUxMTE2NmEzMDBiMDAzZDg0YWEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9PvQ0PUmPvGCq0-6sJD7O--ZPW7Tku-koA4Nd6U_diA'
    }
})
