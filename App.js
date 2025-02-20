import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <Text>Hola esta es la rama de mario</Text>
=======
      <Text>Texto de mario</Text>
      <Text>Texto añadido por Robert...</Text>
      <Button> Hola soy un boton </Button>
>>>>>>> Stashed changes
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
