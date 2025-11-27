import CategoryController from "../controllers/CategoryController"
import { useState, useEffect } from "react"
import { View, Text, Image, FlatList, TouchableOpacity} from "react-native"

const MovieListView = ({ navigation, route }) => {
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState({})

    const { category_id } = route.params

    useEffect(() => {
        loadMovies(category_id)
    }, [])

    useEffect(() => {
        loadCategory(category_id)
    }, [category_id])

    async function loadMovies(id) {
        const result = await CategoryController.getMoviesByCategory(id)

        if (result.error) {
            // manejar error
        } else {
            setMovies(result)
        }
    }

    async function loadCategory(id) {
        const result = await CategoryController.getCategoryById(id)

        if (result.error) {
            // manejar error    
        } else {
            setCategory(result)
        }
    }

    const goToDetails = (id) => {
        navigation.navigate("MovieDetails", {
            movie_id: id
        })
    }

    return (
        <View>
            <Text> {category.name} Movies </Text>
                <FlatList 
                    data={movies} 
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => goToDetails(item.id)}>
                            <View>
                                <Text style={{fontSize: 18, textAlign: "center"}}>
                                    {item.title} ({item.year})
                                </Text>
                                <Image source={{uri: item.image}} style={{height: 300, width: 200}}/>
                            </View>
                        </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default MovieListView