import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { API_KEY, IMG_PATH } from '../../service'
import { Buttons, Container, Details, Movie } from './style'

type detailsType = {
    id?: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
}


const DetailsMap = () => {
    const [movie, setMovie] = useState<detailsType | null>(null)
    const { id } = useParams()
    const navigate = useNavigate()

    const detailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
        getDetailMovie()
    }, [id])

    const getDetailMovie = async () => {
        let data = await fetch(detailsURL);
        let response = await data.json()
        console.log(response)

        // const { title, poster_path, overview, release_date } = response

        const cinema = {
            id,
            title: response.title,
            overview: response.overview,
            poster_path: `${IMG_PATH}${response.poster_path}`,
            release_date: response.release_date
        }
        setMovie(cinema)
    }


    return <>
        <Container background={movie?.poster_path}>
            <Movie>
                <img src={movie?.poster_path} alt={`${movie?.overview} - ${movie?.title}`} />
            </Movie>
            <Details>
                <h1>{movie?.title}</h1>
                <span>Sinospe: {movie?.overview}</span>
                <span>Release date {movie?.release_date}</span>
                <Buttons onClick={() => navigate("/")}>
                    <Link to="/">Go Back 🔙</Link>
                </Buttons>
            </Details>
        </Container>
    </>
}

export default DetailsMap
