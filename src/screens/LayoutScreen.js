import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Child #1</Text>
      <Text style={styles.boxTwo}>Child #2</Text>
      <Text style={styles.boxThree}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 5,
    justifyContent: "center",
  },
  boxOne: {
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: 100,
    justifyContent: "flex-end",
  },
  boxTwo: {
    backgroundColor: "lightyellow",
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: 100,
    top: 100,
  },
  boxThree: {
    backgroundColor: "lightgreen",
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: 100,
  },
});

export default LayoutScreen;
