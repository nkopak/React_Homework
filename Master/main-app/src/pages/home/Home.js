import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FilmList} from "../../components";
import {genresService, movieService} from "../../services";
import styles from './Home.module.css'

export const Home = () => {
    const history = useHistory();

    const [moviesList, setMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null)

    const fetchMovies = async () => {
        try {
            const {results, page, total_pages, total_results} = await movieService.getMovies();
            return results;
        } catch (e) {
            console.error(e)
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres();
            return genres
        } catch (e) {
            console.error(e)
        }
    }

    const fetchMoviesData = async() => {
        const requests = [fetchGenres(),fetchMovies()]

        try{
            setIsLoading(true);
            const [genres,movies] = await Promise.all(requests);
            // console.log({movies,genres})
            const mergedWithGenresMovies = movies.map((movie)=>{
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId=>genres.find(el=> el.id ===genreId))

                return{
                    ...movie,
                    movieGenresList
                }

            })
            setMoviesList(mergedWithGenresMovies);

            // console.log(mergedWithGenresMovies);
        } catch (e){
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMoviesData();
    }, [])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )

    const onFilmClick = (film)=>{
        history.push(`/movie/${film.id}`)
    }

    return (
        <div>
            {/*{true ? renderLoadingIndicator() : <FilmList/>}*/}
            {isLoading || isLoading === null ? renderLoadingIndicator() : (
                <FilmList
                    onFilmClick={onFilmClick}
                    items={moviesList}
                />)}
        </div>

    )
}