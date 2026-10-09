import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface BtnProp {
    texto: string
    preco:number
}

const Botao = ({texto, preco}: BtnProp) => {
  return (
    <View>
        <TouchableOpacity style={styles.botao} onPress={() => alert('Comprado!')}>
            <Text style={styles.texto}>{texto} | R$ {preco} </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15
    },
    texto:{
        color:'black',
        textAlign:'center'
    }
})