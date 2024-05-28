import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saudacao from "./components/Saudacao"
import Counter from "./components/Counter"
import Texto from "./components/Texto"
import Lista from "./components/Lista"


export default function App() {
  return (
    <View style={styles.container}>
{/*      <Saudacao name="Edson" />*/}
{/*}      <Counter/>*/}
{/*<Texto />*/}
<Lista />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
