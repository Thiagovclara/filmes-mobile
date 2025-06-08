import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function GestaoUsuario() {
  const [nome, setNome] = useState('Maria');
  const [email, setEmail] = useState('maria@email.com');

  const salvar = () => {
    Alert.alert('Salvo com sucesso!', `Nome: ${nome}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestão de Usuário</Text>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 5,
  },
});