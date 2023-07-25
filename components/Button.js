import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import Colors from "../styles/Colors";

function Button({ title, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressedStyle]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.header,
    padding: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 40,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  pressedStyle: { backgroundColor: "#575757", opacity: 0.5 },
});

export default Button;
