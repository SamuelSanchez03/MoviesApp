import MovieService from "../services/MovieService";

async function getMovies() {
    try {
        const res = await MovieService.getMovies()
        return res.data
    } catch (error) {
        console.log(error)
        return { error: "Could not load movies." }
    }
}

async function getMovieById(id) {
    try {
        const res = await MovieService.getMovieById(id)
        return res.data
    } catch(error) {
        console.log(error)
        return { error: "Could not load the movie." }
    }
}

export default { getMovies, getMovieById }