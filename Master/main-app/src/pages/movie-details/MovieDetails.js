import React, {useState, useEffect} from 'react';
import styles from './MovieDetails.module.css';
import {useParams, useRouteMatch} from "react-router-dom";
import {movieService} from "../../services";

export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    // const {params: {id}} = useRouteMatch();
    const {id, ...rest} = useParams();

    // console.log({id, ...rest});

    const getMovieDetails = async () => {
        try{
            setIsLoading(true);
            const data = await movieService.getMovieDataById(id)
            console.log(data);
            setFilmDetails(data)
        } catch(e){
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    if(isLoading && !filmDetails || isLoading===null){
        return (<div>loading...</div>)
    }

    return (
        <div>
            hello
            <h1>{filmDetails.original_title}</h1>
            <h3>{filmDetails.genres.map(el=> (<span key={el.id}>- {el.name} -</span>))}</h3>
            <h3>{filmDetails.tagline}</h3>
            <p>{filmDetails.overview}</p>
        </div>
    )
}