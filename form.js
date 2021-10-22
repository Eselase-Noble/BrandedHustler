import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./styles";

const Form = () => {
  const [text, setText] = useState("");
  return (
    <View styles={styles.container}>
      <Text style={styles.header}>Register</Text>

      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Your name"
        underlineColorAndroid={"transparent"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="User Id"
        underlineColorAndroid={"transparent"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Email"
        underlineColorAndroid={"transparent"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Password"
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Confirm Password"
        underlineColorAndroid={"transparent"}
      />

      <Button
        onPress={() => alert("You have successfully registered your account ")}
        title="Sign Up"
      />
    </View>
  );
};

export default Form;
