import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';

function Counter() {
    const[count, setCount] = useState(0);

    return(
      <View>
        <Text>contador: {count}</Text>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        <Button title="Decrementar" onPress={() => setCount(count - 1)} />

      </View>
    )
}

export default Counter;