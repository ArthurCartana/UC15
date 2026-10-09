import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card2 = () => {
    return (
        
        <View>
            <Image source={{ uri: 'https://i.pinimg.com/736x/7f/66/e3/7f66e3405ab58b27841570b3e0b7458c.jpg' }} style={styles.foto} />
            <Text style={styles.texto}>Neymar Jr</Text>
            <Text style={styles.subtitulo}> Neymar da Silva Santos júnior</Text>
            <TouchableOpacity style={styles.botao} onPress={() => alert('Encostou no botão do Ney!')}>
                <Text style={styles.texto}>Clique</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card2
const styles = StyleSheet.create({
    foto: {
        width: 100,
        height: 150
    },
    texto: {
        color: 'white',
        textAlign: 'center'
    },
    botao: {
        backgroundColor: 'grey',
        borderRadius: 50,
        paddingVertical: 5,

    },
    subtitulo: {
        fontSize: 14,
        color: 'white'
    }
})