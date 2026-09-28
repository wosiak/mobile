import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Estado 1: guarda o texto digitado no campo. Tipado explicitamente como string.
  const [name, setName] = useState<string>('');

  // Estado 2: controla se o acesso já foi liberado. Tipado como boolean.
  const [accessAuthorized, setAccessAuthorized] = useState<boolean>(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Complexo Turístico</Text>

      {/* Renderização condicional: o ternário troca a tela inteira
          conforme o estado accessAuthorized */}
      {accessAuthorized ? (
        // Depois de liberado: mensagem com o nome e o botão de sair
        <View style={styles.card}>
          <Text style={styles.granted}>Acesso Liberado para: {name}</Text>

          {/* Bônus: limpa os dois estados e volta para o formulário */}
          <Button
            title="Sair"
            color="#dc2626"
            onPress={() => {
              setAccessAuthorized(false);
              setName('');
            }}
          />
        </View>
      ) : (
        // Antes de liberar: o formulário
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            // onChangeText avisa a cada tecla digitada; setName atualiza o estado
            value={name}
            onChangeText={setName}
          />

          {/* O botão fica desabilitado enquanto o campo estiver vazio.
              O trim() ignora espaços, para não liberar com o nome em branco. */}
          <Button
            title="Solicitar Acesso"
            disabled={name.trim() === ''}
            onPress={() => setAccessAuthorized(true)}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    paddingTop: 80,
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  granted: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
  },
});
