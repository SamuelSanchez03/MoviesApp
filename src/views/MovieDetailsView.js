import MovieController from "../controllers/MovieController"
import { useState, useEffect } from "react"
import { View, Text, Image} from "react-native"
import LoadingView from "./LoadingView"

const MovieDetailsView = ({ route }) => {
    const [movie, setMovie] = useState("")
    const [loading, setLoading] = useState(true)
    const { movie_id } = route.params

    useEffect(() => {
        loadMovieDetails(movie_id)
    }, [])

    async function loadMovieDetails(id) {
        try {
            setLoading(true)
            const result = await MovieController.getMovieById(id)

            if (result.error) {
                console.log("Error loading movie details")
            } else {
                setMovie(result)
            }
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <LoadingView message="Loading Movie Details" />
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