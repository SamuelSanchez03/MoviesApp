import api from "./api"
import { MOVIE_ENDPOINT } from "../utils/constants"

function getMovies() {
    return api.get(MOVIE_ENDPOINT)
}

function getMovieById(id) {
    return api.get(`${MOVIE_ENDPOINT}/${id}`)
}

export default { getMovies, getMovieById }