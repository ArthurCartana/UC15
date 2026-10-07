import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: Philippe Coutinho</Text>
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzqBB4Mkyo2xlsy_xVbH5sKZIzOzOWesP9zuxgFd6GTldPFDsNak_AXc&s=10'}} style={styles.foto}/>
      <TouchableOpacity style={styles.botao} onPress={() => alert('Botão clicado')}>
        <Text style={styles.texto}>Clique</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        gap: 10
    },
    texto: {
        color: 'black',
        textAlign: 'center'
    },
    botao: {
        backgroundColor: 'lightblue',
        borderRadius: 50,
        paddingVertical: 5
    },
    foto: {
      width: 80,
      height: 80
    }
})