import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const PAYMENT = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Fill the Forms Below To Complete The Purchse </Text>
      <TextInput>CARD NAME</TextInput>
      <TextInput>CARD NUMBER</TextInput>
      <TextInput>EXPIRY DATE</TextInput>
      <TextInput>CVV</TextInput>
      <Button>SUBMIT</Button>
    </View>
  );
};
export default PAYMENT;

const styles = StyleSheet.create({});
