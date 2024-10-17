import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 35 },
    { name: "Friend #2", age: 34 },
    { name: "Friend #3", age: 65 },
    { name: "Friend #4", age: 15 },
    { name: "Friend #5", age: 58 },
    { name: "Friend #6", age: 47 },
    { name: "Friend #7", age: 63 },
    { name: "Friend #8", age: 36 },
    { name: "Friend #9", age: 38 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
    paddingLeft: 20,
  },
});

export default ListScreen;
