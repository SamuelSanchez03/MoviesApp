import MovieController from "../controllers/MovieController"
import { useState, useEffect } from "react"
import { View, Text, Image} from "react-native"

const MovieDetailsView = ({ route }) => {
    const [movie, setMovie] = useState("")

    const { movie_id } = route.params

    useEffect(() => {
        loadMovieDetails(movie_id)
    }, [])

    async function loadMovieDetails(id) {
        const result = await MovieController.getMovieById(id)

        if (result.error) {
            // manejar error
        } else {
            setMovie(result)
        }
    }

    return (
        <View>
            <Text> {movie.title} </Text>
            <Text> {movie.director} </Text>
            <Text> {movie.imdb_score} </Text>
            <Text> {movie.rating} </Text>
            <Text> {movie.description} </Text>
        </View>
    )
}

export default MovieDetailsView