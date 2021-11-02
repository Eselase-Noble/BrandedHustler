import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { CartHeader, CheckoutItem } from ".";

const CartContents = ({ navigation, routeParams }) => {
  const { name, price, Size, color, imageSrc } = routeParams;
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const newItem = (
      <CheckoutItem
        name={name}
        price={price}
        Size={Size}
        color={color}
        imageSrc={imageSrc}
      />
    );
    setCheckoutItems([...checkoutItems, newItem]);
  }, [routeParams]);
  return (
    <View style={styles.container}>
      <CartHeader navigation={navigation} />
      <View style={styles.container_contents}>
        <Text>{JSON.stringify(routeParams)}</Text>
      </View>

      <ScrollView>
        {checkoutItems.map((item, idx) => {
          return (
            <CheckoutItem
              key={idx}
              name={name}
              price={price}
              Size={Size}
              color={color}
              imageSrc={imageSrc}
            />
          );
        })}
      </ScrollView>
      {/* SubTotal */}
      <View
        style={{
          backgroundColor: "#e9e8ed",
          width: "90%",
          borderRadius: 15,
          padding: "1em",
          marginHorizontal: "auto",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#151110",
            fontSize: 18,
            fontWeight: 300,
            marginBottom: 10,
          }}
        >
          Subtotal{" "}
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "700",
              color: "#dc3d11",
            }}
          >
            $ <Text style={{ color: "#151110" }}>3,400.00</Text>
          </Text>
        </Text>

        <Text
          style={{
            color: "#151110",
            fontSize: 18,
            fontWeight: 300,
            marginBottom: 20,
          }}
        >
          Shopping fee{" "}
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "700",
              color: "#dc3d11",
            }}
          >
            $ <Text style={{ color: "#151110" }}>100.00</Text>
          </Text>
        </Text>

        <Text
          style={{
            color: "#151110",
            fontSize: 18,
            fontWeight: 300,
            marginBottom: 10,
          }}
        >
          Total{" "}
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "700",
              color: "#dc3d11",
            }}
          >
            $ <Text style={{ color: "#151110" }}>3,500.00</Text>
          </Text>
        </Text>
      </View>

      {/* Checkout Button */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
          style={{
            backgroundColor: "#dc3c11",
            maxWidth: "80%",
            borderRadius: 15,
            padding: "1em",
            marginHorizontal: "auto",
          }}
        >
          <Text style={{ fontSize: 22, color: "#e9e8ed", fontWeight: "700" }}>
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartContents;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  container_contents: {
    width: "95%",
    marginVertical: 0,
    marginHorizontal: "auto",
    padding: "1em",
  },
});
