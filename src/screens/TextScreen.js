import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const error = "Password must be longer than 5 characters";

  return (
    <View>
      <Text>Enter your name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="words"
        autoCorrect={false} // both are important in for example password or email inputs
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Your name is: {name}</Text>
      <Text>Now, enter your password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPass) => setPassword(newPass)}
      />
      {password.length < 5 ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 40,
  },
});

export default TextScreen;
