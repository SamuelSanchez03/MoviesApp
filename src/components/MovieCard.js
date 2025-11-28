import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from "react-native";


const MovieCard = ({ title, year, image, onPress }) => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={onPress} 
        activeOpacity={0.85}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageInner}
      >
        {/* Fade más oscuro para la info */}
        <View style={styles.bottomFade} />
        {/* Texto encima del fade */}
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 240,
    borderRadius: 14,
    overflow: "hidden",
    marginRight: 14,
    marginBottom: 16,
    backgroundColor: "#111",
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  imageInner: {
    borderRadius: 14,
  },

  bottomFade: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,                          
    backgroundColor: "rgba(0,0,0,0.7)", 
  },

  textWrapper: {
    position: "absolute",
    bottom: 12,
    left: 10,
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  year: {
    color: "#cccccc",
    fontSize: 13,
    marginTop: 2,
  },
});