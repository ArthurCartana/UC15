
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <ImageBackground
            source={require('../assets/imagem vibe')}
            style={styles.background}
        >
            <StatusBar style="light" />

            <View style={styles.overlay} />

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.logo}>
                        vibe<Text style={styles.ponto}>.</Text>
                    </Text>

                    <Text style={styles.subtitulo}>
                        Seu mundo, suas conexões.
                    </Text>
                </View>

                <View style={styles.formulario}>

                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={26} color="white" />

                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor="#ddd"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={26} color="white" />

                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#ddd"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={!mostrarSenha}
                        />

                        <TouchableOpacity
                            onPress={() => setMostrarSenha(!mostrarSenha)}
                        >
                            <Ionicons
                                name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                                size={26}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.esqueceu}>
                        <Text style={styles.textoEsqueceu}>
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#ff527b', '#ff6262']}
                            style={styles.botao}
                        >
                            <Text style={styles.textoBotao}>Entrar</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.divisor} />

                    <View style={styles.criarConta}>
                        <Text style={styles.textoCriar}>
                            Não tem conta?
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.linkCriar}>
                                Criar conta
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#210b3b',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 5, 55, 0.55)',
    },

    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 100,
        paddingBottom: 40,
    },

    header: {
        alignItems: 'center',
    },

    logo: {
        fontSize: 90,
        fontWeight: 'bold',
        color: 'white',
    },

    ponto: {
        color: '#ff626b',
    },

    subtitulo: {
        color: 'white',
        fontSize: 21,
    },

    formulario: {
        backgroundColor: 'rgba(65, 25, 85, 0.65)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        borderRadius: 35,
        padding: 25,
        paddingTop: 45,
        paddingBottom: 35,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.12)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        borderRadius: 40,
        height: 70,
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        color: 'white',
        fontSize: 19,
        marginLeft: 15,
    },

    esqueceu: {
        alignItems: 'flex-end',
        marginBottom: 45,
    },

    textoEsqueceu: {
        color: '#ff929a',
        fontSize: 17,
        fontWeight: 'bold',
    },

    botao: {
        height: 75,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold',
    },

    divisor: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.25)',
        marginTop: 55,
        marginBottom: 35,
    },

    criarConta: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoCriar: {
        color: 'white',
        fontSize: 17,
    },

    linkCriar: {
        color: '#ff929a',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});
