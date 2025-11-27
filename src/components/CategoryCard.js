import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from "react-native";


//Categoría con imagen y texto
const CategoryCard = ({title, image, onPress}) => {

    return(
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.85} //oscurece la tarjeta al presionar
            onPress={onPress}
        >
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageInner}
      >{/*Una capa para oscurecer la imagen y que el texto resalte */}
        <View style={styles.overlay} /> 
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
    )
}

export default CategoryCard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderRadius: 18,
    overflow: "hidden",
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#141414",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageInner: {
    borderRadius: 18,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // capa oscura
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});