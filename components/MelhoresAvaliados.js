import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const filmesMock = [
  {
    id: '1',
    titulo: 'Interstellar',
    nota: 9.5,
    imagem: 'https://image.tmdb.org/t/p/w500/nome_da_imagem.jpg',
  },
  {
    id: '2',
    titulo: 'O Poderoso Chefão',
    nota: 9.3,
    imagem: 'https://image.tmdb.org/t/p/w500/nome_da_imagem2.jpg',
  },
];

export default function MelhoresAvaliados() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    setFilmes(filmesMock);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.rating}>Nota: {item.nota}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Melhores Avaliados</Text>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 16, alignItems: 'center' },
  image: { width: 200, height: 300, borderRadius: 10 },
  title: { fontSize: 18, marginTop: 8 },
  rating: { fontSize: 16, color: 'gray' },
});