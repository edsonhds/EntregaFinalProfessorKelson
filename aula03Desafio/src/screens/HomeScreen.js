import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const users = [
    { name: "João", email: "joao@bol.com", id: "40", fone: "98725-3645" },
    { name: "Maria", email: "maria@uol.com.br", id: "25", fone: "98525-6396" },
    { name: "Carlos", email: "carlos@yahoo.com.br", id: "36", fone: "98741-1478" },
  ];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {users.map((user) => (
        <Button
          title={`Detalhes de ${user.name}`}
          onPress={() =>
            navigation.navigate("Details", {
              user: user,
            })
          }
        />
      ))}
    </View>
  );
};

export default HomeScreen;
