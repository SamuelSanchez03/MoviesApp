import CategoryController from "../controllers/CategoryController"
import { useState, useEffect } from "react"
import { View, Text, Image, FlatList,StyleSheet ,TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MovieCard from "../components/MovieCard"
import LoadingView from "./LoadingView"

const MovieListView = ({ navigation, route }) => {
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)

    const { category_id } = route.params

    useEffect(() => {
        loadMovies(category_id)
    }, [])

    useEffect(() => {
        loadCategory(category_id)
    }, [category_id])

    async function loadMovies(id) {
        try {
            setLoading(true); 
            const result = await CategoryController.getMoviesByCategory(id);

            if (result.error) {
                console.log("Error loading movies")
            } else {
                setMovies(result)
            }
        } finally {
            setLoading(false)
        }
    }

    async function loadCategory(id) {
        const result = await CategoryController.getCategoryById(id)

        if (result.error) {
            console.log("Error loading category");  
        } else {
            setCategory(result)
        }
    }

    const goToDetails = (id) => {
        navigation.navigate("MovieDetails", {
            movie_id: id
        })
    }

    const renderMovie = ({ item }) => {
        return (
            <MovieCard
                title={item.title}
                year={item.year}
                image={item.image}
                onPress={() => goToDetails(item.id)}
            />
        )
    }

    if (loading) {
        return <LoadingView message="Loading Movies" />
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text
                    style={{
                        color: "white",
                        fontSize: 28,
                        fontWeight: "700",
                        marginBottom: 16,
                    }}
                    >
                    {category.name} Movies
                </Text>

                <FlatList
                    data={movies}
                    renderItem={renderMovie}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}  //mostrarlo en dos columnas
                    style={{ flex: 1 }}                     
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false} 
                    
                />
            </View>
        </SafeAreaView>
    )
}

export default MovieListView

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
  listContent: {
    paddingBottom: 24,
  },
  row: {
    justifyContent: "space-between",
  },
})