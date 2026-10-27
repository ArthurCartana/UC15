import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Login({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email..."
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha..."
            />
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.botao}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.botaoCadastro} >
                <Text style={styles.textoBotao}>Criar uma conta</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15
    },
    titulo: {
        marginBottom: 15,
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#2196F3',
        padding: 12,
        width: 200,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10
    },

    botaoCadastro: {
        backgroundColor: '#4CAF50',
        padding: 12,
        width: 200,
        borderRadius: 8,
        alignItems: 'center'
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})
