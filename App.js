import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./form";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

const Person = (props) => {
  const { name, age } = props;

  return (
    <view>
      <text>
        Hello. My name is {name} and I am {age} years old
      </text>
    </view>
  );
};
