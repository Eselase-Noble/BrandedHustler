import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const CartItem = ({
  navigation,
  isFavourite,
  name,
  price,
  imageSrc,
  color,
  Reviews,
  PromoInfo,
  Size,
}) => {
  const [favourite, setFavourite] = useState(isFavourite);
  useEffect(() => {
    setFavourite(isFavourite);
  }, [favourite]);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(navigation);
        navigation.navigate("Details", {
          name,
          price,
          color,
          imageSrc,
          PromoInfo,
          Size,
        });
      }}
    >
      <View>
        <Image style={{ width: 120, height: 120 }} source={{ uri: imageSrc }} />
        <AntDesign
          name="hearto"
          color="black"
          size={24}
          onPress={() => {
            if (favourite) {
              navigation.navigate("Cart", {
                name,
                price,
                color,
                imageSrc,
                Size,
              });

              setFavourite(!favourite);
            }
          }}
        />
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{color}</Text>
        <Text>{Size}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
