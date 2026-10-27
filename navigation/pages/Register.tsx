import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Register = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.titulo}>Register</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome..."
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu email..."
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu cpf..."
            />

            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.botaoCadastro}> 
             <Text style={styles.textoBotao}>
                Criar conta
             </Text>
              
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
                <Text style={styles.textoBotao}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15
    },
    titulo: {
        fontWeight: 'bold',
        marginBottom: 15
    },
    
    botao: {
        backgroundColor: 'grey',
        padding: 12,
        width: 200,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10
    },

    botaoCadastro: {
        backgroundColor: '#2196F3',
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