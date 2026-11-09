import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Catálogo do clube. A posição no array é o id usado na rota.
const movies = [
  'Cidade de Deus',
  'Tropa de Elite',
  'Central do Brasil',
  'O Auto da Compadecida',
  'Bacurau',
  'Que Horas Ela Volta?',
  'Aquarius',
  'Ainda Estou Aqui',
  'O Som ao Redor',
  'Pixote',
];

export default function Movie() {
  // O nome do parâmetro vem do nome do arquivo: [id].tsx vira "id"
  const { id } = useLocalSearchParams<{ id: string }>();

  // O id chega como texto, então precisa virar número para indexar o array
  const movie = movies[Number(id)];

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>FILME #{id}</Text>

      {/* Se o id não existir no catálogo, mostra um aviso em vez de quebrar */}
      <Text style={styles.title}>{movie ? movie : 'Filme não encontrado'}</Text>

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
    gap: 12,
  },
  label: {
    fontSize: 14,
    color: '#f59e0b',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
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
