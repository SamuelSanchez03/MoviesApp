import CategoryController from "../controllers/CategoryController"
import { useState, useEffect } from "react"
import { View, Text, FlatList, TouchableOpacity} from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CategoryListView = ({ navigation }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadCategories()
    }, [])

    async function loadCategories() {
        const result = await CategoryController.getCategories()

        if (result.error) {
            // manejar error
        } else {
            setCategories(result)
        }
    }

    const goToMovies = (id) => {
        navigation.navigate("Movies", {
            category_id: id
        })
    }

    return (
        <View>
            <Text> Categories </Text>
                <FlatList 
                    data={categories} 
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => goToMovies(item.id)}>
                            <View>
                                <FontAwesome6 name={item.icon} size={24} color="black" />
                                <Text style={{fontSize: 18, textAlign: "center"}}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default CategoryListView