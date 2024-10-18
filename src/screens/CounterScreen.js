import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case "increment":
      return {...state, count: state.count + action.payload};
    case "decrement":
      return {...state, count: state.count - action.payload};
    default:
      return;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: INCREMENT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: INCREMENT })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
