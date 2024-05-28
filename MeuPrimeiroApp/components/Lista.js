import React from 'react';
import { Text, View } from 'react-native';

function Lista() {
    const itens = ["Edson", "Henrique", "dos", "Santos"]

    return(
      <View>
        {itens.map(item =>
            <Text>{item}</Text>
        )}
      </View>
    )
}

export default Lista;