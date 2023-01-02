import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { MovieType } from '../../types/movieType';
import { MovieName, MovieGrade, List } from './style'
import {API_KEY, IMG_PATH} from '../../service'

export const MovieList = () => {
    const [movies, setMovie] = useState<MovieType[]>([]);

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    useEffect(() => {
        fetchingData()
    })


    const fetchingData = async () => {
        try {
            let data = await fetch(URL);
            let response = await data.json();
            setMovie(response.results)
        } catch(e) {
            console.error('We got an error at ', e)
        }
    }

    return <>
        <MovieGrade>
            {movies.map((item, index) => (
                <List key={index}>
                    <Link to={`/details/${item.id}`}>
                        <img src={`${IMG_PATH}${item.poster_path}`} alt={item.title} />
                    <MovieName>{item.title}</MovieName>
                    </Link>
                </List>
            ))}
        </MovieGrade>

    </>
}
