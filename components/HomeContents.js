import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CartItem, HomeHeader } from ".";
import { TextInput } from "react-native-gesture-handler";

const bikeCategories = [
  "All",
  "RoadBike",
  "Mountain",
  "Urban",
  "Hybrid",
  "Cyclocross",
];

const HomeContents = ({ navigation }) => {
  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <View style={styles.container_contents}>
          <Text
            style={{
              fontWeight: "900",
              color: "#e9e8ed",
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            The world's <Text style={{ color: "#dc3c11" }}>Best Bike</Text>
          </Text>
          <Text style={{ color: "#151110", fontWeight: "bold", fontSize: 20 }}>
            Categories
          </Text>

          {/* Categories List Selector */}
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            style={{ margin: 10 }}
          >
            {bikeCategories.map((category, idx) => {
              return (
                <TouchableOpacity key={idx} activeOpacity={0.75}>
                  <Text
                    style={{
                      color: "#a4a3a3",
                      fontSize: 20,
                      fontWeight: "600",
                      padding: "0.55em",
                      backgroundColor: "#e9e8ed",
                      marginRight: 10,
                      borderRadius: 17,
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Cart Item list */}
          <ScrollView
            style={{}}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            contentContainerStyle={{
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <CartItem
              navigation={navigation}
              isFavourite
              name="Brompton Bike*"
              review="Brompton Bicycle is a British manufacturer of folding bicycles based in Greenford, London. The Brompton folding bicycle and accessories are the company's core product, noted for its self-supporting compact size when stored"
              price="125.00"
              Size="Large"
              PromoInfo="Get  10% discount on every 2 items you buy"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-PNG.png"
              color="red"
            />

            <CartItem
              navigation={navigation}
              isFavourite
              name="Mountain Bike"
              review="Buy Mountain Bikes from Evans Cycles here. Choose from our wide range of Bikes with Home delivery + Click & Collect from stores nationwide."
              price="123.00"
              Size="Medium"
              PromoInfo="Get  10% discount on every 2 items you buy"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
              color="blue"
            />

            <CartItem
              navigation={navigation}
              isFavourite
              color="green"
              name="Mountain Bike"
              price="136.00"
              Size="Small"
              PromoInfo="Get  10% discount on every 2 items you buy"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              navigation={navigation}
              isFavourite
              color="white"
              name="Mountain Bike"
              price="102.00"
              Size="Large"
              PromoInfo="Get  10% discount on every 2 items you buy"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              navigation={navigation}
              isFavourite
              name="Mountain Bike"
              price="138.00"
              Size="Large"
              PromoInfo="Get  10% discount on every 2 items you buy"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              navigation={navigation}
              isFavourite
              name="Mountain Bike"
              price="133.00"
              Size="Large"
              PromoInfo="Get  10% discount on every 2 items you buy"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default HomeContents;

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
