import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "DARK";

  return (
    <View
      style={[styles.container, { backgroundColor: isDark ? "#333" : "#FFF" }]}
    >
      <Text style={{ color: isDark ? "#FFF" : "#333" }}>
        TEMA ATUAL: {theme}
      </Text>

      <Button title="CLIQUE PARA MUDAR O TEMA" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
OBS.: Uma boa prática é manter os estilos separados do componente para evitar 
a mistura de lógica de estilo e lógica de componente. 
Tornando o código mais fácil de ler e manter. Bem como o uso da função 
StyleSheet.create para definir os estilos mantendo-os separados dos compontenes.

Lógica de estilo é como você decide a aparência de algo em sua aplicação. 
Exempo, tudo realcioando a aparência visual de um botão.
Como cor, tamanho, fonte do texto, etc. 

Já a lógica de componente é como esse botão funciona. 
Exemplo, o que acontece quando se clica no botão? Ele abre um novo menu? Ele envia um formulário? 
Ele é o código que faz o botão funcionar da maneira que se quer.
*/
