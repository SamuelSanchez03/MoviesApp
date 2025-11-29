import CategoryController from "../controllers/CategoryController"
import { useState, useEffect } from "react"
import { View, Text, FlatList,StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard from "../components/CategoryCard";

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

    const renderCategory = ({ item }) => {
        return (
            <CategoryCard
            title={item.name}
            image={item.icon}
            onPress={() => goToMovies(item.id)}
            />
        );
    };

    return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}  //mostrarlo en dos columnas
            style={{ flex: 1 }}                     
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}  
            ListEmptyComponent={
                <Text style={{ color: "white" }}>No categories loaded</Text>
            }
        />
      </View>
    </SafeAreaView>
  );
}

export default CategoryListView;

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
});