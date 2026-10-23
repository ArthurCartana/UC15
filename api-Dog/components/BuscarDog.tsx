import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

interface Raca {
  id: number
  name: string
}

const BuscarDog = () => {
  const [raca, setRaca] = useState<string>('')
  const [imagem, setImagem] = useState<string>('')

  async function buscarCachorro() {

    const resposta = await fetch(
      'https://api.thedogapi.com/v1/breeds',
      {
        headers: {
          'x-api-key': 'live_1pCdLeaZvpYwo2TSbAQeYWxJqMTmMkXmY0MrGb6hPjPvtSBkQbdYAusLOLBtyB4v',
        },
      }
    );

    const dados = await resposta.json();
    console.log(dados);

    const cachorroEncontrado = dados.find((item: Raca) => {
      return item.name.toLowerCase() === raca.toLowerCase();
    });
    
    if (cachorroEncontrado) {
      console.log(cachorroEncontrado.id);
      setImagem(cachorroEncontrado.image.url);
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={raca}
        onChangeText={setRaca}
        placeholder="Buscar raça..."
      />
      <TouchableOpacity onPress={buscarCachorro}>
        <Text style={styles.botao}>Buscar</Text>
      </TouchableOpacity>
      <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
    </View>
  )
}

export default BuscarDog

const styles = StyleSheet.create({
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10
  },
  botao: {
    backgroundColor: "#007AFF",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
  }
})