import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import Colors from "../styles/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function EntriesList({ entries, navigation }) {
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("Edit Entry", { entry: item })}
      style={styles.entry}
    >
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.caloriesContainer}>
        {!item.isReviewed && (
          <FontAwesome5
            name="exclamation-triangle"
            size={20}
            color={Colors.warning}
          />
        )}
        <View style={styles.caloriesBox}>
          <Text style={styles.calories}>{item.calories}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={entries}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginBottom: 16,
    backgroundColor: Colors.header,
    borderRadius: 4,
  },
  description: {
    fontSize: 16,
    color: Colors.text,
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  caloriesBox: {
    backgroundColor: Colors.caloriesBox,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  calories: {
    fontSize: 16,
    color: Colors.header,
  },
});

export default EntriesList;
