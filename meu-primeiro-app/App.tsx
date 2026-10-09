import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Image from './components/Image';
import Card2 from './components/Card2';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Botao from './components/Botao';
import Texto from './components/Texto';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image image = "https://i0.statig.com.br/bancodeimagens/d5/e4/mi/d5e4mi2w3k4kc4wer5ard1bh5.jpg"/>
        <Texto texto = "Neymar Jr"/>
        <Botao texto = "Paris Saint Germain" preco={180.00}/>
        <Image image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhJvqve-yaRLy4Mt-906f1LNbKgJhTAioHr8kc7r12Lsy_B0ew55Si2Me&s=10"/>
        <Texto texto = "Philippe Coutinho"/>
        <Botao texto = "Liverpool" preco={150.00}/>
        <Image image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflODmJzJ71SPVtGLTD8ogy_h0cWDSvUyLXeAFXaKq0JNdybuOuEozKIg&s=10"/>
        <Texto texto = "Gabriel Jesus"/>
        <Botao texto = "Manchester City" preco={120.00}/>
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texto: {
    color: 'white'
  }
});
