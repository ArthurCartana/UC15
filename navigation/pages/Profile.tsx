import { Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

function Profile({ navigation }: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYYYmIOuieWvw2LUapfA7Catq3e-NyzpWMPjVoZ32pQ&s=10"}} style={styles.imagem}/>
            <Text style={styles.titulo}>Suas informações</Text>
            <Text  style={styles.texto}>Nome</Text>
            <Text  style={styles.texto}>E-mail</Text>
            <Text  style={styles.texto}>CPF</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.botao}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15
    },
    titulo: {
        marginBottom: 15,
        fontWeight: 'bold'
        
    },
    texto: {
        marginBottom: 15
    },
    imagem: {
        height: 100,
        width: 100
    },
    botao: {
        backgroundColor: 'grey',
        padding: 12,
        width: 200,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})