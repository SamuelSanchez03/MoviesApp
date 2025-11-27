import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CategoryListView from "../views/CategoryListView"
import MovieListView from "../views/MovieListView"
import MovieDetailsView from "../views/MovieDetailsView"

const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoryListView} />
        <Stack.Screen name="Movies" component={MovieListView} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}