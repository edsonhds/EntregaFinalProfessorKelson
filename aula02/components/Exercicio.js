import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio = () => {
  return (
    <View style={styles.containe}>
      <Text>Edson Henrique P5B</Text>
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  containe: {
    flex: 1,
  },
  box: {
    height: 100,
    width: "100%",
  },
});

export default Exercicio;
