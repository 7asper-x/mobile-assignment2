import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import Screen from "./Screen";
import Colors from "../styles/Colors";
import { writeToDB } from "../services/FirestoreHelper";
import Button from "../components/Button";

function AddEntryScreen({ navigation }) {
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = async () => {
    // Validation
    if (!description || !calories) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Check for non-numeric calories
    if (isNaN(Number(calories))) {
      Alert.alert('Error', 'Calories should be a number');
      return;
    }

    // Check for negative calories
    if (Number(calories) < 0) {
      Alert.alert('Error', 'Calories should be a positive number');
      return;
    }

    // Firebase code to add entry can be added here
    await writeToDB({ calories, description, isReviewed: calories <= 500 });
    // Clear the form
    setDescription("");
    setCalories("");

    navigation.goBack();
  };

  return (
    <Screen>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Calories</Text>
        <TextInput
            style={styles.input}
            value={calories.toString()}
            onChangeText={setCalories}
            keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={() => {
          setDescription("");
          setCalories("");
        }} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: Colors.header,
  },
  input: {
    flex: 2,
    height: 40,
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    backgroundColor: Colors.inputBackground,
  },
  descriptionInput: {
    flex: 2,
    height: 100,  // Increase the height to make the input box bigger
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    backgroundColor: Colors.inputBackground,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddEntryScreen;
