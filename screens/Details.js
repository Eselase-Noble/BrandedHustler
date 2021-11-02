import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Details = ({ navigation, route }) => {
  const { name, price, color, imageSrc, PromoInfo, Size } = route.params;
  return (
    <View>
      <Image style={{ width: 120, height: 120 }} source={{ uri: imageSrc }} />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{color}</Text>
      <Text>{PromoInfo}</Text>
      <Text>{Size}</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.naviagte("Cart", [
            name,
            price,
            color,
            imageSrc,
            PromoInfo,
            Size,
          ])
        }
      ></TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
