
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import produtos from '../data/produtos';

interface Busca {
  onComprar: () => void 
}

const Busca = ({onComprar}: Busca) => {
  const [termo, setTermo] = useState('');

  const produtosFiltrados = produtos.filter((produto) =>
    produto.titulo
      .toLowerCase()
      .includes(termo.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto..."
        value={termo}
        onChangeText={setTermo}
      />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produto}>
            <Image
              source={{ uri: item.image }}
              style={styles.imagem}
            />

            <View>
              <Text style={styles.nome}>
                {item.titulo}
              </Text>

              <Text style={styles.preco}>
                R$ {item.preco.toFixed(2)}
              </Text>

              <TouchableOpacity onPress={onComprar}>
                <Text style={styles.botao}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum produto encontrado.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  produto: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 15,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
  botao: {
    backgroundColor: "#007AFF",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
}
});

export default Busca;
