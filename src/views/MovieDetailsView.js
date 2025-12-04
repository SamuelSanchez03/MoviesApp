import MovieController from "../controllers/MovieController"
import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import LoadingView from "./LoadingView"
import MovieDetailsCard from "../components/MovieDetailsCard"

const MovieDetailsView = ({ route }) => {
  const [movie, setMovie] = useState("")
  const [loading, setLoading] = useState(true)

  const { movie_id } = route.params

  useEffect(() => {
    loadMovieDetails(movie_id)
  }, [])

  async function loadMovieDetails(id) {
    try {
      setLoading(true);
      const result = await MovieController.getMovieById(id);

      if (result.error) {
        console.log("Error loading movie details");
      } else {
        setMovie(result);
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingView message="Loading Movie Details" />
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <MovieDetailsCard
          title={movie.title}
          director={movie.director}
          score={movie.imdb_score}
          rating={movie.rating}
          image={movie.image}
        />
        <Text style={styles.description}>{movie.description}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetailsView

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050505",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  description: {
    color: "#e0e0e0",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
})
