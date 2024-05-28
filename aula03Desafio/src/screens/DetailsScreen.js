import { View, Text } from "react-native";
import React from "react";

const DetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tela de Detalhes</Text>
      <Text>Nome: {user.name}</Text>
      <Text>ID: {user.id}</Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Fone: {user.fone}</Text>
    </View>
  );
};

export default DetailsScreen;
