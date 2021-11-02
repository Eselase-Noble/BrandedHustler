import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

const CheckoutItem = ({ name, category, price }) => {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      {/* left  */}
      <View
        style={{
          borderRadius: 15,
          padding: "0.5em",
          backgroundColor: "#e9e8ed",
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={{
            uri: "https://www.pngmart.com/files/6/Bicycle-Transparent-PNG.png",
          }}
        />
      </View>

      {/* middle text */}
      <View
        style={{ flexGrow: 1, marginLeft: 20, alignItems: "space-between" }}
      >
        <Text style={{ fontWeight: 500, fontSize: 20, color: "#151110" }}>
          {name}
        </Text>
        <Text style={{ fontWeight: 500, fontSize: 18, color: "#e9e8ed" }}>
          {category}
        </Text>
        <Text style={{ fontWeight: 600, fontSize: 22, color: "#dc3c11" }}>
          $ <Text style={{ color: "#151110" }}>{price}</Text>
        </Text>
      </View>

      {/* right */}

      <View style={{ flexGrow: 1, maxWidth: "20%" }}>
        <TouchableOpacity>
          <FontAwesome
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#e9e8ed",
              borderRadius: 10,
              padding: "0.2em",
            }}
            name="trash-o"
            size={24}
            color="#dc3c11"
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            <AntDesign name="minuscircle" size={26} color="black" />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <AntDesign name="pluscircle" size={26} color="#dc3c11" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckoutItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
});
