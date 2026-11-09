import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  // useLocalSearchParams lê os parâmetros da rota. Aqui pega o "user" que
  // veio em "/home?user=Fulano". Entrando por "/home" ele vem undefined.
  const { user } = useLocalSearchParams<{ user?: string }>();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Clube de Cinema</Text>

      {/* A mesma tela atende os dois fluxos: com e sem usuário logado */}
      {user ? (
        <View style={styles.card}>
          <Text style={styles.message}>Bem-vindo de volta, {user}!</Text>
          <Text style={styles.price}>Ingresso de sócio: R$10,00</Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.message}>Bem-vindo ao Clube de Cinema!</Text>
          <Text style={styles.price}>Ingresso R$20,00</Text>
        </View>
      )}

      {/* router.back() tira esta tela da pilha e volta para a anterior.
          Usar router.push('/') empilharia uma segunda index por cima. */}
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    paddingTop: 80,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    gap: 8,
  },
  message: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#f59e0b',
  },
  button: {
    backgroundColor: '#f59e0b',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
