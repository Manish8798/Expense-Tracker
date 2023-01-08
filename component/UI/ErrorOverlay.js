import { View, StyleSheet, Text } from "react-native";

import { GlobalStyle } from "../../constants/style";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
