import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },

  input: {
    backgroundColor: "black",
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "blue",
    fontStyle: "bold",
    color: "white",
    alignSelf: "stretch",
    borderStyle: "none",
    textAlign: "center",
  },
  header: {
    backgroundColor: "black",
    fontSize: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "white",
    paddingBottom: 10,
    marginBottom: 40,
  },
});

export default styles;
