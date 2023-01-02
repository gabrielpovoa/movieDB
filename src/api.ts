import { useParams } from "react-router-dom";
import { API_KEY } from "./service";

const baseURL =  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-US&page=1`;

const {id} = useParams()
console.log(id) 

export const api = {
    getAllMovies: async () => {
        let data = await fetch(baseURL)
        let response = await data.json()
        return response;
    },
    getMovieDetails: async () => {

    }
}