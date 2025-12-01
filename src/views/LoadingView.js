// src/components/LoadingView.js
import React from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const LoadingView = ({ message = "Loading..." }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.text}>{message}</Text>
      </View>
    </SafeAreaView>
  )
}

export default LoadingView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050505",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    color: "#ffffff",
    fontSize: 16,
  },
})

