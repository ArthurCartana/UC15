import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TextProp {
    texto: string
}

const Texto = ({texto}: TextProp) => {
  return (
    <View>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  )
}

export default Texto

const styles = StyleSheet.create({
    texto: {
        color:'white',
        textAlign: 'center'
    }
})