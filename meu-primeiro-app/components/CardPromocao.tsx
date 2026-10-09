import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

interface CardProps {
  image: string
  titulo: string;
  preco: number;
  promocao?: boolean;
  onComprar: () => void;
}

const Card = ({ image, titulo, preco, onComprar, promocao }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image}/>
      <Text style={styles.texto}>{titulo}</Text>

      <Text>
        R$ {preco}
      </Text>

      {promocao && (
        <Text style={styles.promocao}>
          Em promoção!
        </Text>
      )}

      <TouchableOpacity onPress={onComprar}>
        <Text style={styles.botao}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  promocao: {
    color: "red",
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#007AFF",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150
}
});

export default Card;