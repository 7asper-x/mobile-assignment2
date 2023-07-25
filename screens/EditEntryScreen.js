import React from "react";
import { View, Pressable, Text, StyleSheet, Alert } from "react-native";
import {deleteFromDB, updateToDB} from "../services/FirestoreHelper";
import Screen from "./Screen";
import Colors from "../styles/Colors";
import { AntDesign } from "@expo/vector-icons";

function EditEntryScreen({ route, navigation }) {
  const description = route.params.entry.description.toString();
  const calories = route.params.entry.calories.toString();
  const isReviewed = route.params.entry.isReviewed;

  const handleDelete = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this entry?",
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
            await deleteFromDB(route.params.entry.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleMarkAsReviewed = async () => {
    await updateToDB(route.params.entry.id)
    navigation.goBack();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.label}>Calories: {calories}</Text>
          <Text style={styles.label}>Description: {description}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressedStyle]} onPress={handleDelete}>
              <AntDesign name="delete" size={24} color={Colors.text} />
            </Pressable>
            {!isReviewed && (
              <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressedStyle]} onPress={handleMarkAsReviewed}>
                <AntDesign name="check" size={24} color={Colors.text} />
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  card: {
    width: "85%",
    padding: 10,
    marginTop: 40,
    backgroundColor: Colors.card,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    color: Colors.header,
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.header,
    padding: 10,
    width: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressedStyle: { backgroundColor: "#575757", opacity: 0.5 },
});

export default EditEntryScreen;
