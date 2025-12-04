import { View, Text, StyleSheet, ImageBackground } from "react-native"

const MovieDetailsCard = ({ title, director, score, rating, image }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageInner}
      >
        <View style={styles.bottomOverlay} />

        
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.director}>{director}</Text>

          <Text style={styles.meta}>
            {score}  |  {rating}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default MovieDetailsCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 320,             
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#111",
    marginBottom: 16,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageInner: {
    borderRadius: 18,
  },
  bottomOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  textWrapper: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 18,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  director: {
    color: "#d0d0d0",
    fontSize: 14,
    marginBottom: 2,
  },
  meta: {
    color: "#b0b0b0",
    fontSize: 14,
  },
})
