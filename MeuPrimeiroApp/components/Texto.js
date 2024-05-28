import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';


const Texto = ({name}) => {
    const [text, setText] = useState('');

    return(
        <View>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Digite aqui"
          />
          <Text>texto digitado: {text}</Text>
        </View>
    )
}
export default Texto;
