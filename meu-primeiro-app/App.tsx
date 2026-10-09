import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Image from './components/Image';
import Card2 from './components/Card2';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Botao from './components/Botao';
import Texto from './components/Texto';
import CardPromocao from './components/CardPromocao';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CardPromocao image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7QORSDrZvaqZFpqarApZyrrkYXXuWuC4rq0dikvrkQ&s" titulo="air max DN" preco={1199.99} onComprar={() => alert("Produto comprado!")} promocao={false} />
          <CardPromocao image="https://imgnike-a.akamaihd.net/1300x1300/08190355A2.jpg" titulo="Nike Dunk" preco={854.99} onComprar={() => alert("Produto comprado!")} promocao={false} />
          <CardPromocao image="https://imgnike-a.akamaihd.net/768x768/044649IEA1.jpg" titulo="Nike Shox TL" preco={999.99} onComprar={() => alert("Produto comprado!")} promocao={true} />
        </ScrollView>
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
