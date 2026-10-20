import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaProduto from './components/ListaProduto';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Busca from './components/Busca';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Busca onComprar={() => alert("Produto comprado!")}/>     
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
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
